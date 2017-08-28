var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InfluencerSchema = new Schema({
    influencer_id: String,
    influenced: [{
        influenced_id: String,
        channel: String,
        visit_date: {type: Date, default: Date.now}
    }]
});

module.exports = mongoose.model('Influencer', InfluencerSchema);