var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    hashId: String,
    created: {type: Date, default: Date.now}
});


// influenced: [
//     {
//         influenced_id: String,
//         influenced_created: Date
//     }
// ]

UserSchema.pre('save', function(next) {
    var user = this;

    console.log('Comments on user.js');

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});
UserSchema.statics.findByHsid = function(hsid, cb) {
    return this.findOne({ hashId: new RegExp(hsid, 'i') }, cb);
};
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
};

module.exports = mongoose.model('User', UserSchema);