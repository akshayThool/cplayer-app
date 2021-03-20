const mongoose = require('mongoose');

const dashPlayersSchema = new mongoose.Schema({
    pid:{
        type : Number,
        required: true
    },
    name : {
        type : String,
        required : true,
    }
})

const DashPlayer = mongoose.model('DashPlayer',dashPlayersSchema);

module.exports = DashPlayer;