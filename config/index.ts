export const config = {
	development: {
		SRC: '../client',
		MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017'
	},

	production: {
		SRC: '../client',
		MONGODB_URI: process.env.MONGODB_URI || ''
	}
};

export interface ConfigI {
	SRC: string;
	MONGODB_URI: string;
}
