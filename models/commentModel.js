const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        requireed: true,
    }
});
module.exports= mongoose.model('comment',commentSchema);