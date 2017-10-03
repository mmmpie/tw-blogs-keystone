var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'insights';
	locals.data = {};

	// Render the view
	view.render('insights');
};
