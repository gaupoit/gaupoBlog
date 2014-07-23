var express = require('express');
	blog = require('./routes/blog');

var app = express();

app.configure(function() {
	app.use(express.static(__dirname  + '/web'));
	console.log("Dirname", __dirname);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.get('/', function (req, res) {
	res.sendfile('./web/html/index.html');
});

app.get('/api/blogs', blog.findAll);
app.get('/api/blogs/:id', blog.findById);
app.post('/api/blogs', blog.addBlog);
app.put('/api/blogs/:id', blog.updateBlog);
app.delete('/api/blogs/:id', blog.deleteBlog);

app.listen(8888);

console.log("App is running on port 8888");
