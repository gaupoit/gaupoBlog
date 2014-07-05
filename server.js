var express = require('express');

var app = express();

app.get('/blogs', function (request, response) {
	response.send([{name: 'firstBlog'}, {name: 'secondBlog'}]);
});

app.get('/blogs/:id', function (request, response) {
	response.send({id:request.param.id, name: "Blog", description: "First Blog"});
});

app.listen(8888);

console.log("App is running on port 8888");
