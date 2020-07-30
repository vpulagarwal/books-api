const db = require('../config/db.config.js');
const Book = db.books;

// Add a book
exports.add = (req, res) => {	
	// Save to MariaDB database
	Book.create({  
			title: req.body.title,
			author: req.body.author,
			insertTime: (new Date()).getTime()
		})
		.then(book => {		
			return Book.findAll({
				attributes: { exclude: ["createdAt", "updatedAt", "insertTime"] },
				order: [
					['insertTime', 'DESC']
				]
			})
		}).then(books => {
			res.send(books)
		})
		.catch(error => res.status(400).send(error))
};
// remove a book
exports.remove = (req, res) => {
	Book.findAll({
		attributes: { exclude: ["createdAt", "updatedAt", "insertTime"] },
		order: [
			['insertTime', 'DESC']
		],
		limit: 1
	}).then((books) => {
		if(books.length > 0){
			return books[0].destroy()
					.then(()=> {res.send(books[0])})
					.catch(()=> error => res.status(400).send(error));
		}else {
			res.send(books)
		}
		
	}).catch(error => res.status(400).send(error));
};