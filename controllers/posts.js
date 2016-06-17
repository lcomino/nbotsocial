var moment = require('moment');
moment.locale('pt-br');

module.exports = function(app){

    var Post = app.models.posts;

    var PostsController = {
        index : function(req, res){
            var params = {};
            Post.find({}, function(err, p){
                

                params.posts = p.map(function(post){
                    var postNovo = post;
                    postNovo.programadoPara = post.programadoPara.map(function(data){                        
                        return moment(new Date(data)).format('DD/MM/YYYY HH:mm:ss');
                    });

                    console.log(postNovo);
                    return postNovo;                    
                });
                
                res.render('posts/index', params);
            });            
        },
        novo : function(req, res){            
            res.render('posts/novo');
        },
        cadastrar : function(req, res){            
                        
            var user = {
                conteudo : req.body.conteudo,
                redeSocial : req.body.redeSocial,
                programadoPara : moment(req.body.programadoParaData + ' ' + req.body.programadoParaHora).toDate()
            };

            Post.create(user, function(err, usuario){
                if(err){                    
                    console.log(err);
                    res.redirect('/');
                }else{
                    //req.session.usuario = usuario;
                    res.redirect('/posts');
                }

            });
        }
    };

    return PostsController;
}