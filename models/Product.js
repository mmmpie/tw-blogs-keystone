var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: true
});

Product.add({
	title: { type: String, required: true },
	version: { type: String, required: false },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	featured: { type: Types.Boolean },
	hero: {
		image: { type: Types.CloudinaryImage },
		content: { type: Types.Markdown, height: 150 }
	},
	screenshot: {
		image: { type: Types.CloudinaryImage },
		content: { type: Types.Markdown, height: 150 }
	},
	platforms: { type: Types.Relationship, ref: 'Platform', many: true },
	databases: { type: Types.Relationship, ref: 'Database', many: true }
});

Product.defaultColumns = 'title, version|20%, author|20%, publishedDate|20%';
Product.register();
