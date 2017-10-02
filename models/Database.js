var keystone = require('keystone');

/**
 * Platform Model
 * ==================
 */

var Database = new keystone.List('Database', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Database.add({
	name: { type: String, required: true },
});

Database.relationship({ ref: 'Product', path: 'products', refPath: 'databases' });

Database.register();
