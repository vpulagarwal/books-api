const env = {
  database: process.env.MARIA_DB || 'books',
  username: process.env.USER_NAME || 'root', 
  password: process.env.PASSWORD || 'vipul', 
  host:  process.env.HOST || 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;