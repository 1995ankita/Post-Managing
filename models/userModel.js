const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requireed: true
    },
    email: {
        type: String,
        requireed: true
    },
    password: {
        type: String,
        requireed: true
    },
    role: {
        type: String,
        default: 0   //0-user,1-Admin ,2-Sub-Admin ,3-Editor
    }

});
module.exports= mongoose.model('users',userSchema);