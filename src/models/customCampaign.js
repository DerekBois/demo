var mongoose = require('mongoose');

var UserCampaignSchema = new mongoose.Schema({
    state: {type: String, default: 'active'}, // active, deleted, archived
    user: String,
    title: String,
    description: String,
    body: String,
    hashtag: String,
    images: [String],
    targetUrl: String,
    slug: String,
    created: {type: Date, default: Date.now}
});

UserCampaignSchema.pre('save', function(next) {
    console.log('Pre save');
    // if (!this.isModified('slug')) return next();

    this.slug = slugify(this.title);

    // this.constructor.find({slug: this.slug}, (err, campaign) => {
    //     if (campaign.slug === this.slug) {
    //         console.log('fsdafdasfasd');
    //         return next({error: 'something'});
    //     }
    // });
    next();

    function slugify(text) {
        let slug = text.replace(/\s|\-\-+/g, '-').replace(/^-+|-+$|[^\w\-]+/g, '');
        return slug.toLowerCase();
    }
});
module.exports = mongoose.model('UserCampaign', UserCampaignSchema);