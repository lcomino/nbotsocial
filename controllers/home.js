module.exports = function(app){
	var HomeController = {
		index : function(req, res){
			res.render('home/index');
		},
		login : function(req, res){
			console.log(req.body);
			var email = req.body.email,
				nome = req.body.nome;

			if(email && nome){
				var usuario = {
					nome : req.body.nome,
					email : req.body.email,
					contatos : []
				};

				req.session.usuario = usuario;
				res.redirect('/contatos');
				
			}else{
				res.redirect('/');
			}
		},
		logout : function(req, res){
			req.session.destroy();
			res.redirect('/');
		}
	};

	return HomeController;
}