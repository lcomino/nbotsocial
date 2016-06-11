module.exports = function(app){

    var Schema = require('mongoose').Schema;

    var midia = Schema({
        url : {type:String, required: true, unique: true}
    });

    return db.model('midias', midia);
};