const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        requireed: true,
        ref:'user'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        requireed: true,
        ref:'post'
    },

});
module.exports= mongoose.model('like',likeSchema);