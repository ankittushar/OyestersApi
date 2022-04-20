const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    name:{type:String, required: true},
    phone:{
        type:String,
        min: 10,
        max: 10
        // validate: {
        //     validator: function(v) {
        //         return /d{10}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid 10 digit number!'
        // }
    },
    address:{type:String}
});

module.exports = mongoose.model('User', userSchema);