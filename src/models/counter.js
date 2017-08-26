var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CounterSchema = new Schema({
    num: {type: Number, default: 100}
});

module.exports = mongoose.model('counter', CounterSchema);