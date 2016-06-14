module.exports = function(app){

    var Schema = require('mongoose').Schema;

    var post = Schema({
        conteudo : {type: String, required : true},
        redeSocial : {type: String, required: true},
        midias : [Schema.Types.ObjectId],
        programadoPara: [Date],
        frequencia : Number,
        ativo : {type: Boolean, default : true},
        qtdeExecucoes : {type:Number, default : 0},
        cadastradoEm: {type:Date, default: Date.now}
    });

    return db.model('posts', post);
};