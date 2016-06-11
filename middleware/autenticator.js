module.exports = function(req, res, next){
    console.log(req);
    /*if(!req.session.usuario){
        return res.redirect('/');
    }*/
    return next();
};