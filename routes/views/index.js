var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'home';
	locals.data = {
		products: []
	}

	// Load the top 3 products
	view.on('init', function (next) {
		var Product = keystone.list('Product');
		var q = Product.model
			.find({
				featured: true,
				state: 'published'
			})
			.limit(3)
			.sort('updatedAt')
			.populate('author categories');

		q.exec(function (err, results) {
			console.log('we found produts.', results);
			locals.data.products = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
