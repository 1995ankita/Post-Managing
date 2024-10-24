const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requireed: true
    }
});
module.exports= mongoose.model('category',categorySchema);