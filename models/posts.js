module.exports = function(app){

    var Schema = require('mongoose').Schema;

    var post = Schema({
        conteudo : {type: String, required : true},
        redeSocial : {type: String, required: true, index: {unique : true}},
        midias : [Schema.Types.ObjectId],
        programadoPara: [Date],
        frequencia : Number,
        ativo : {type: Boolean, default : true},
        qtdeExecucoes : Number,
        cadastradoEm: {type:Date, default: Date.now}
    });

    return db.model('posts', post);
};