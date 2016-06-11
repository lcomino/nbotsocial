module.exports = function(app){
    var posts = app.controllers.posts;
    app.get('/posts', posts.index);
    app.get('/posts/novo', posts.novo);
    app.post('/posts/novo', posts.cadastrar);
}