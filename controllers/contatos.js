module.exports = function(app){
	var ContatoController = {
		index : function(req, res){
			var usuario = req.session.usuario,
				params = {usuario : usuario};

			console.log(req.session.usuario);				

			res.render('contatos/index', params);
		}
	};

	return ContatoController;
}