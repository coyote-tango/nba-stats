var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

var playerSchema = new Schema({
    _id : String,
    first_name : {
        type: String,
        required : true
    },
    last_name : {
        type: String,
        required : true
    },
    number : {
        type: String,
        required : true
    },
    pos : {type:[String], required : true},
    team_id : {
        type: String,
        required : true
    },
    team_name : {
        type: String,
        required : true
    },
    height : {type : Number, default : null},
    weight : {type : Number, default : null},
    age : {type : Number, default : null},
    born: { type: Date, required : false, default: null},
    stats : {type : [Schema.Types.Mixed], default : null }

});

var player_model = mongoose.model('players', playerSchema);
module.exports  = player_model;