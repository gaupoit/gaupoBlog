var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
	db = new Db('blogdb', server);

db.open(function (err, db) {
	if(!err) {
		console.log("Connected to 'blogdb' database");
		db.collection('blogs', {strict:true}, function(err, collection) {
			if (err) {
				console.log("The 'blogs' collection does not exit!. Create it");
				populateDB();
			}
		});	
	}
});

exports.findAll = function (request, response) {
	db.collection('blogs', function (err, collection) {
		collection.find().toArray(function (err, items){
			response.send(items);
		});
	})
};

exports.findById = function (request, response) {
	var id = request.params.id;
	console.log('Retrieving blogs: ' + id);
	db.collection('blogs', function (err, collection) {
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
			response.send(item);
		});
	});
};

exports.addBlog = function (request, response) {
	var blog = request.body;
	console.log("Adding blog: " + JSON.stringify(blog));
	db.collection('blogs', function (err, collection) {
		collection.insert(blog, {safe:true}, function (err, result){
			if (err) {
				response.send({'error':'An error has occured'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				response.send(result[0]);
			}
		});
	});
};

exports.updateBlog = function (request, response) {
	var id = request.params.id;
	var blog = request.body;
	console.log("Updating blog: " + id);
	console.log(JSON.stringify(blog));
	db.collection('blogs', function(err, collection) {
		collection.update({'_id':new BSON.ObjectID(id)}, blog, {safe: true}, function (err, result){
			if (err) {
				console.log('Error updating blog: ' + err);
				response.send({'error':'An error has occured'});
			} else {
				console.log('' + result + ' document(s) updated');
				response.send(blog);
			}
		});
	});
}

exports.deleteBlog = function (request, response) {
	var id = request.params.id;
	console.log('Deleting blog: ' + id);
	db.collection('blogs', function (err, collection) {
		collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function (err, result){
			if (err) {
				response.send({'error': 'An error has occurred'});
			} else {
				console.log('' + result + ' document(s) deleted');
				response.send(request.body);
			}
		});
	});
}

var populateDB = function () {
	var blogs = [
	{
		name: "Six important things in Entity Framework",
		author: "ThinhNP",
		createdDate: "20140708"
	},
	{
		name: "What is Entity Framework",
		author: "ThinhNP",
		createdDate: "20140708"
	}
	];

	db.collection('blogs', function (err, collection) {
		collection.insert(blogs, {safe: true}, function (err, result){});
	});
};