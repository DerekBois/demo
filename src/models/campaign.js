var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaignSchema = new Schema({
    state: {type: String, default: 'active'}, // active, deleted, archived
    sponsor: String, // sponsor id (only one)
    title: String,
    description: String,
    body: String,
    hashtag: String,
    images: [String],
    targetUrl: String,
    users: [String], // user ids
    // sponsor: String -- create sponsor schema?

    created: {type: Date, default: Date.now}
    
});
module.exports = mongoose.model('Campaign', CampaignSchema);