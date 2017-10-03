var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Platform Model
 * ==================
 */

var Database = new keystone.List('Database', {
	autokey: { from: 'name', path: 'key', unique: true },
	track: true
});

Database.add({
	name: { type: String, required: true },
	sprite: { type: Types.CloudinaryImage }
});

Database.relationship({ ref: 'Product', path: 'products', refPath: 'databases' });

Database.register();
