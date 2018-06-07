var Player = require('../models/player_model');

exports.index = function (req, res) {
        Player.find({}).then(function(players){
            res.render('players', {players : players})
        })
}

exports.find_player = function (req, res) {
    Player.findOne({_id : req.params.id }).then(function(player){
        res.render('player', { player : player, headers : Object.keys(player.stats[0])});
        //res.send({headers : Object.keys(player.stats[0])})
    })
}
