/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', 'email': 'craig.bassett@quest.com', 'password': 'admin', 'isAdmin': true, __ref: 'admin' },
	],

	Database: [
		{ name: 'MySQL', __ref: 'mysql' },
		{ name: 'MSSQL' },
		{ name: 'Mongo' },
		{ name: 'Maria' },
		{ name: 'Postgres' }
	],

	Platform: [
		{ name: 'Windows', __ref: 'windows' },
		{ name: 'MacOS', __ref: 'macos' },
		{ name: 'Linux' },
		{ name: 'Other' }
	],

	Product: [
		{
			title: 'Toad Edge',
			version: '1.0.0',
			state: 'published',
			author: 'admin',
			featured: true,
			hero: {
				image: {
					public_id: 'h0jy4gw7xhaipuanctsz',
					version: 1506966158,
					signature: '63edf5d00af6888cef2b4445b8d2b6ae86527be0',
					width: 2560,
					height: 650,
					format: 'jpg',
					resource_type: 'image',
					url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1506966158/h0jy4gw7xhaipuanctsz.jpg',
					secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1506966158/h0jy4gw7xhaipuanctsz.jpg'
				},
				content: '# Title\nSome nifty content.'
			},
			screenshot: {
				image: {
					public_id: 'tz6huyaq7xwnddcdsg7g',
					version: 1506966329,
					signature: '4204109491e1a68a2ac9f5b2b446df760f30806e',
					width: 537,
					height: 376,
					format: 'svg',
					resource_type: 'image',
					url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1506966329/tz6huyaq7xwnddcdsg7g.svg',
					secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1506966329/tz6huyaq7xwnddcdsg7g.svg'
				},
				content: '# Title\nSome nifty content.'
			},
			platforms: [
				'windows', 'macos'
			],
			databases: [
				'mysql'
			]
		}
	]

};
