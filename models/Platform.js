var keystone = require('keystone');

/**
 * Platform Model
 * ==================
 */

var Platform = new keystone.List('Platform', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Platform.add({
	name: { type: String, required: true },
});

Platform.relationship({ ref: 'Product', path: 'products', refPath: 'platforms' });

Platform.register();
