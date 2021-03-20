const mongoose = require('mongoose');

const favPlayersSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,'Email cannot be blank']
    },
    fav:[{pid : {
            type : Number}, 
          name :{
              type: String
          }
    }]
})

const FavPlayer = mongoose.model('FavPlayer',favPlayersSchema);

module.exports = FavPlayer;