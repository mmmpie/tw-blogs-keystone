var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'products';
	locals.data = {
		products: [],
		dbPlatforms: []
	}

	// Load the products
	view.on('init', function (next) {
		var Product = keystone.list('Product');
		var q = Product.model
			.find({
				state: 'published'
			})
			.sort('updatedAt');

		q.exec(function (err, results) {
			// console.log('we found produts.', results);
			locals.data.products = results;
			next(err);
		});
	});

	// load the platforms
	view.on('init', function (next) {
		var Database = keystone.list('Database');
		var q = Database.model
			.find()
			.sort('title');

		q.exec(function (err, results) {
			// console.log('we found produts.', results);
			locals.data.dbPlatforms = results;
			next(err);
		});
	});

	// Render the view
	view.render('products');
};
