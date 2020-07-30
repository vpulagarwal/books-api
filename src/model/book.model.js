module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  title: {
		type: Sequelize.STRING
	  },
	  author: {
		  type: Sequelize.STRING
	  },
	  insertTime: {
		  type: Sequelize.BIGINT
	  }
	});
	return Book;
}