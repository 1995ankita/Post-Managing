const mongoose = require('mongoose');
const permissionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        requireed: true,
        ref:'user'
    },
    permission:[{
        permission_name:String,
        permission_value:[Number]
    }]
});
module.exports= mongoose.model('permisssion',permissionSchema);