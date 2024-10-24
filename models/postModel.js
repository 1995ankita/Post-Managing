const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        requireed: true
    },
    description: {
        type: String,
        requireed: true
    },
    categories: {
        type: Array,
        requireed: false
    }

});
module.exports= mongoose.model('post',postSchema);