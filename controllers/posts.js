module.exports = function(app){

    var Post = app.models.posts;

    var PostsController = {
        index : function(req, res){
            res.render('posts/index');
        },
        novo : function(req, res){
            res.render('posts/novo');
        },
        cadastrar : function(req, res){
            res.render('posts/novo');
            console.log(req.body);

            /*Post.create(user, function(err, usuario){
                if(err){
                    console.log(err);
                    res.redirect('/');
                }else{
                    req.session.usuario = usuario;
                    res.redirect('/contatos');
                }

            });*/
        }
    };

    return PostsController;
}