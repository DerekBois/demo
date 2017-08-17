'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./src/models/user');

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

router.route('/users/check/:username')
    .get((req, res) => {
        User.count({email: req.params.username}, (err, count) => {
            if (err) {
                res.send(err);
            }
            res.json(count);
        });
    });

router.route('/users')
    .get((req, res) => {
        User.find((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    })
    .post((req, res) => {
        let user = new User();

        // add validation here

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(err => {
            if (err) {
                res.send(err);
            }

            res.json({message: 'User successfully added!'});
        });
    });

router.route('/users/:username')
    .get((req, res) => {
        User.find({email: req.params.username}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    })
    .put((req, res) => {
        User.find({email: req.params.username}, (err, user) => {
            if (err) {
                res.send(err);
            }
            req.body.firstName && (user.firstName = req.body.firstName);
            req.body.lastName && (user.lastName = req.body.lastName);
            req.body.email && (user.email = req.body.email);
            req.body.password && (user.password = req.body.password);

            user.save((err) => {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'User saved!'})
            });
        });
    })
    .delete((req, res) => {
        User.remove({email: req.params.username}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({message: `${user.firstName} ${user.lastName} deleted`});
        });
        
    });




app.use('/api', router);

app.listen(port, function() {
    console.log(`api running on port ${port}`);
});