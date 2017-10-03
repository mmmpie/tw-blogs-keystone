var keystone = require('keystone');

/**
 * Role Model
 * ==================
 */

var Role = new keystone.List('Role', {
	autokey: { from: 'name', path: 'key', unique: true },
	track: true
});

Role.add({
	name: { type: String, required: true },
});

Role.relationship({ ref: 'Product', path: 'products', refPath: 'roles' });

Role.register();
