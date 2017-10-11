var mongoose = require('mongoose');

var SponsorCampaignSchema = new mongoose.Schema({
    state: {type: String, default: 'active'}, // active, deleted, archived
    sponsor: String, // sponsor id (only one)
    title: String,
    description: String,
    body: String,
    hashtag: String,
    images: [String],
    targetUrl: String,
    slug: String,
    users: [String], // user ids
    created: {type: Date, default: Date.now}
});

SponsorCampaignSchema.pre('save', function(next) {
    // // if (!this.isModified('slug')) return next();

    // this.slug = slugify(this.title);
    // console.log(this)

    console.log(this.title);

    // // this.constructor.find({slug: this.slug}, (err, campaign) => {
    // //     if (campaign.slug === this.slug) {
    // //         console.log('fsdafdasfasd');
    // //         return next({error: 'something'});
    // //     }
    // // });
    next();

    // function slugify(text) {
    //     let slug = text.replace(/\s|\-\-+/g, '-').replace(/^-+|-+$|[^\w\-]+/g, '');
    //     return slug.toLowerCase();
    // }
});
module.exports = mongoose.model('SponsorCampaign', SponsorCampaignSchema);