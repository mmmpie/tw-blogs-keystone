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
		{
			name: 'IBM DB2', __ref: 'db2',
			sprite: {
				public_id: 'effn0qsnuhehagecyqi0',
				version: 1507045863,
				signature: 'd50dcbefc49a6b6fcf1d9c051c7c741fb13dd3c8',
				width: 211,
				height: 105,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045863/effn0qsnuhehagecyqi0.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045863/effn0qsnuhehagecyqi0.png'
			}
		},
		{
			name: 'MSSQL', __ref: 'mssql',
			sprite: {
				public_id: 'uwnhb8uftcz6ernuadmw',
				version: 1507045749,
				signature: '97347eb69226deb79931d1ca712d2affb4f9d14a',
				width: 211,
				height: 105,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045749/uwnhb8uftcz6ernuadmw.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045749/uwnhb8uftcz6ernuadmw.png'
			}
		},
		{
			name: 'MySQL', __ref: 'mysql',
			sprite: {
				public_id: 'risd4cctknzcxceaslhg',
				version: 1507045873,
				signature: '86415e0c9b04912fe6bdd6ce16818d04c1823a7b',
				width: 211,
				height: 105,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045873/risd4cctknzcxceaslhg.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045873/risd4cctknzcxceaslhg.png'
			}
		},
		{
			name: 'NoSQL', __ref: 'nosql',
			sprite: {
				public_id: 'ewv8ijprshmism5ad3cl',
				version: 1507045881,
				signature: 'c545607d5c1274c6111ee4ba98b532af29fe6b6b',
				width: 211,
				height: 105,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045881/ewv8ijprshmism5ad3cl.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045881/ewv8ijprshmism5ad3cl.png'
			}
		},
		{
			name: 'Oracle', __ref: 'oracle',
			sprite: {
				public_id: 'j7r7jpqehdjcyvg4ulm1',
				version: 1507045889,
				signature: 'ae4202a7901a637845daefcbb35a7ace7990c025',
				width: 211,
				height: 105,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045889/j7r7jpqehdjcyvg4ulm1.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045889/j7r7jpqehdjcyvg4ulm1.png'
			}
		},
		{
			name: 'Postgres', __ref: 'postgres',
			sprite: {
				public_id: 'kbzwczburz67w0cagvin',
				version: 1507045897,
				signature: '3f0c43972278ecb85fe27f1754c21dae7528d708',
				width: 140,
				height: 130,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045897/kbzwczburz67w0cagvin.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045897/kbzwczburz67w0cagvin.png'
			}
		},
		{
			name: 'SAP', __ref: 'sap',
			sprite: {
				public_id: 'y6dezwrgkjooucxxkyt7',
				version: 1507045904,
				signature: 'd24599082f2ce45b5b0869dffe8b7d9d425af2ed',
				width: 249,
				height: 115,
				format: 'png',
				resource_type: 'image',
				url: 'http://res.cloudinary.com/keystone-demo/image/upload/v1507045904/y6dezwrgkjooucxxkyt7.png',
				secure_url: 'https://res.cloudinary.com/keystone-demo/image/upload/v1507045904/y6dezwrgkjooucxxkyt7.png'
			}
		}
	],

	Platform: [
		{ name: 'Windows', __ref: 'windows' },
		{ name: 'MacOS', __ref: 'macos' },
		{ name: 'Linux' },
		{ name: 'Other' }
	],

	Role: [
		{ name: 'Developers', __ref: 'developers' },
		{ name: 'Administrators', __ref: 'administrators' },
		{ name: 'Analysts', __ref: 'analysts' },
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
				content: '# Simplify complexity and drive performance\nToday\'s database technology is becoming increasingly complex, and supports previously unthinkable data volumes. This drives organizations to spend up to 75% of their time keeping the lights on, leaving little time to deliver innovations that move the business.'
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
				content: 'Lightweight, flexible toolset for the development and management of MySQL databases.'
			},
			platforms: [
				'windows', 'macos'
			],
			databases: [
				'mysql'
			]
		},
		{
			title: 'Toad for Oracle',
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
				content: '# Simplify complexity and drive performance\nToday\'s database technology is becoming increasingly complex, and supports previously unthinkable data volumes. This drives organizations to spend up to 75% of their time keeping the lights on, leaving little time to deliver innovations that move the business.'
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
				content: 'Save time, improve performance and reduce risks with the leading database development, administration and optimization software.'
			},
			platforms: [
				'windows', 'macos'
			],
			databases: [
				'oracle'
			]
		},
		{
			title: 'Toad for IBM DB2',
			version: '1.0.1',
			state: 'published',
			author: 'admin',
			featured: false,
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
				content: '# Simplify complexity and drive performance\nToday\'s database technology is becoming increasingly complex, and supports previously unthinkable data volumes. This drives organizations to spend up to 75% of their time keeping the lights on, leaving little time to deliver innovations that move the business.'
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
				content: 'Develop and manage DB2 LUW & z/OS databases with less time and effort.'
			},
			platforms: [
				'windows', 'macos'
			],
			databases: [
				'db2'
			]
		}
	]

};
