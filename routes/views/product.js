var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'product';
	locals.filters = {
		product: req.params.product,
	};
	locals.product = {};

	// Load the current product
	view.on('init', function (next) {

		var q = keystone.list('Product').model.findOne({
			state: 'published',
			slug: locals.filters.product,
		});

		q.exec(function (err, result) {
			console.log('found product', result);
			locals.product = result;
			next(err);
		});

	});

	// Render the view
	view.render('product');
};
