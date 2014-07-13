var express = require('express');
	blog = require('./routes/blog');

var app = express();

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.get('/blogs', blog.findAll);
app.get('/blogs/:id', blog.findById);
app.post('/blogs', blog.addBlog);
app.put('/blogs/:id', blog.updateBlog);
app.delete('/blogs/:id', blog.deleteBlog);

app.listen(8888);

console.log("App is running on port 8888");
