module.exports = function(app){

	var Usuario = app.models.usuarios;

	var HomeController = {
		index : function(req, res){
			res.render('home/index');
		},
		login : function(req, res){
			var query = {email : req.body.email};
			Usuario.findOne(query).select('nome email').exec(function(err, usuario){

				if(usuario){
					req.session.usuario = usuario;
					res.redirect('/contatos');
				}else{

					var user = {
						nome : req.body.nome,
						email : req.body.email,
						senha : "123"
					}

					Usuario.create(user, function(err, usuario){
						if(err){
							console.log(err);
							res.redirect('/');
						}else{
							req.session.usuario = usuario;
							res.redirect('/contatos');
						}

					});
				}

			});
		},
		logout : function(req, res){
			req.session.destroy();
			res.redirect('/');
		}
	};

	return HomeController;
}