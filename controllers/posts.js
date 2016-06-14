module.exports = function(app){

    var Post = app.models.posts;

    var PostsController = {
        index : function(req, res){
            var params = {};
            Post.find({}, function(err, posts){
                params.posts = posts;
                console.log(posts);
                res.render('posts/index', params);
            });            
        },
        novo : function(req, res){
            res.render('posts/novo');
        },
        cadastrar : function(req, res){            
            console.log(req.body);
            var user = {
                conteudo : req.body.conteudo,
                redeSocial : req.body.redeSocial
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