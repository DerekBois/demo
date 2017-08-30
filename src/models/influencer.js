var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InfluencerSchema = new Schema({
    influencerId: String,
    influenced: [{
        influencedId: String,
        channel: String,
        signUpDate: {type: Date, default: Date.now}
    }]
});

module.exports = mongoose.model('Influencer', InfluencerSchema);