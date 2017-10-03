var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'downloads';
	locals.data = {};

	// Render the view
	view.render('downloads');
};
