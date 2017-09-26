'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./src/models/user');
var Visit = require('./src/models/visit');
var Influencer = require('./src/models/influencer');
var UserCampaign = require('./src/models/userCampaign');
var counter = require('./src/models/counter');
var Hashids = require('hashids');
var jwt = require('./server/services/jwt');

var API_SECRET = 'shh...';

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://derek:2909800@ds127968.mlab.com:27968/influencer-app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

router.route('/signup').post((req, res) => {
    let newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    let hashids = new Hashids('newuser', 5, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');

    User.findOne({email: newUser.email}, (err, user) => {
        if (user) {
            return res.send({error: 'This email already exists'});
        }
        counter.findOne((err, c) => {
            if (!c) {
                return res.send({error: 'Something went wrong with the counter in /signup'});
            }
            c.num++
            c.save();
        })
        .then(({num}) => {
            newUser.hashId = hashids.encode(num);
            newUser.save(err => {
                createSendToken(newUser, res);
            });
        });
    });
});

router.route('/influence').post((req, res) => {
    let influencer,
        influenced = {
            influencedId: req.body.newUserId,
            channel: req.body.channel
        };

    User.findByHsid(req.body.hsid, (err, user) => {
        if (err) {
            return res.send(err);
        }
        if (!user) {
            return res.status(401).send({error: 'No user found'});
        }

        Influencer.findOne({influencerId: user._id}, (err, existingInfluencer) => {
            if (!existingInfluencer) {
                influencer = new Influencer({
                    influencerId: user._id,
                    influenced: [influenced]
                })
            }
            if (existingInfluencer) {
                influencer = existingInfluencer;
                influencer.influenced = [...influencer.influenced, influenced];
            }
            influencer.save(err => {
                res.json({message: 'Influencer Created'});
            });
        });
    });
});

router.route('/user').put((req, res) => {
    let newUser = req.body;

    User.findById(newUser._id, (err, user) => {
        if (err) {
            return res.send(err);
        }
        Object.keys(newUser).forEach(key => {
            if (!key.startsWith('_')) {
                newUser[key] !== user[key] && (user[key] = newUser[key]);
            }
        });
        user.save(err => {
            createSendToken(user, res);
        });
    });
});


router.route('/user/:email').get((req, res) => {
    User.find({email: req.params.email}, (err, user) => {
        if (err) {
            return res.send(err);
        }
        res.json(user);
    });
});
router.route('/user/:email').delete((req, res) => {
    User.remove({email: req.params.email}, (err, user) => {
        if (err) {
            return res.send(err);
        }
        res.json({message: `Users deleted`});
    });
});


router.route('/login').post((req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (!user) {
            return res.status(401).send({error: 'There is no user in the system with that email address'});
        }
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) {
                throw(err);
            }
            if (!isMatch) {
                return res.status(401).send({message: 'The password provided does not match our records'});
            }
            createSendToken(user, res);
        });
    });
});

router.route('/auth').post((req, res) => {
    let payload = jwt.decode(req.body.token, API_SECRET);

    if (!payload) {
        res.send({error: 'Something went wrong'});
    }
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return res.send(err);
        }
        if (!user) {
            return res.status(401).send({error: 'No user found'});
        }
        res.status(200).json(stripPass(user));
    });
});

router.route('/hsid/visit').post((req, res) => {
    User.findByHsid(req.body.hsid, (err, user) => {
        if (!user) {
            return res.status(401).send({error: 'No user found'});
        }
        let visit = new Visit({
            original_user_id: user._id,
            hsid: req.body.hsid,
            channel: req.body.channel
        });

        Visit.findOne({original_user_id: user._id}, (err, vis) => {
            if (err) {
                return res.send(err); 
            }
            visit.save(err => {
                if (err) {
                    return res.send(err); 
                }
                return res.status(200).json(visit);
            });
        });
    });
});

router.route('/hsid/visit').delete((req, res) => {
    Visit.remove((err, vis) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `Visits deleted`});
    });
});

router.route('/users').delete((req, res) => {
    User.remove((err, vis) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `Users deleted`});
    });
});
















/* Campaigns */

router.route('/campaign/user').post((req, res) => {
    let campaign = new UserCampaign(req.body.campaign);

    UserCampaign.findOne({title: campaign.title}, (err, c) => {
        if (c) {
            return res.send({error: 'A campaign by this name already exists'});
        }
        campaign.save(err => {
            
            res.send(campaign);
        });
    });

    // let newUser = new User({
    //     email: req.body.email,
    //     password: req.body.password
    // });

    // User.findOne({email: newUser.email}, (err, user) => {
    //     if (user) {
    //         return res.send({error: 'This email already exists'});
    //     }
    //     counter.findOne((err, c) => {
    //         if (!c) {
    //             return res.send({error: 'Something went wrong with the counter in /signup'});
    //         }
    //         c.num++
    //         c.save();
    //     })
    //     .then(({num}) => {
    //         newUser.hashId = hashids.encode(num);
    //         newUser.save(err => {
    //             createSendToken(newUser, res);
    //         });
    //     });
    // });
});




















function createSendToken(user, res) {
    let payload = {
        sub: user._id
    };
    let token = jwt.encode(payload, API_SECRET);

    res.status(200).json({
        user: stripPass(user), 
        token
    });
}
function stripPass(obj) {
    let data = JSON.parse(JSON.stringify(obj));
    delete data.password;
    return data;
}








// router.route('/user')
//     .get((req, res) => {
//         User.find((err, users) => {
//             if (err) {
//                 res.send(err);
//             }
//             res.json(users);
//         });
//     })
//     .post((req, res) => {
//         let user = new User();

//         user.firstName = req.body.firstName;
//         user.lastName = req.body.lastName;
//         user.email = req.body.email;
//         user.password = req.body.password;

//         user.save(err => {
//             if (err) {
//                 res.send(err);
//             }
//             res.json(user);
//         });
//     })
//     .put((req, res) => {
//         User.findById(req.body._id, (err, user) => {
//             if (err) {
//                 res.send(err);
//             }

//             user = Object.assign(user, req.body);

//             user.save((err) => {
//                 if (err) {
//                     res.send(err);
//                 }
//                 res.json(user);
//             });
//         });
//     });

// router.route('/users/:username')
//     .get((req, res) => {
//         User.find({email: req.params.username}, (err, user) => {
//             if (err) {
//                 res.send(err);
//             }
//             res.json(user);
//         });
//     })
//     .delete((req, res) => {
//         User.remove({email: req.params.username}, (err, user) => {
//             if (err) {
//                 res.send(err);
//             }
//             res.json({message: `${req.params.username} deleted`});
//         });
        
//     });


app.use('/api', router);

app.listen(port, function() {
    console.log(`api running on port ${port}`);
});