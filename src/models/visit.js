var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VisitSchema = new Schema({
    original_user_id: String,
    hsid: String,
    channel: String,
    visit_date: {type: Date, default: Date.now}
});

// VisitSchema.pre('save', function(next) {
//     var user = this;




//     // will have hsid
//     // define channel
//     // find orignal contact by hsid, define original user


//     next();


//     // if (!user.isModified('password')) return next();

//     // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     //     if (err) return next(err);

//     //     bcrypt.hash(user.password, salt, function(err, hash) {
//     //         if (err) return next(err);

//     //         user.password = hash;
//     //         next();
//     //     });
//     // });
// });

module.exports = mongoose.model('Visit', VisitSchema);