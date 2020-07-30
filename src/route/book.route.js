module.exports = function(app) {
 
    const books = require('../controller/book.controller.js');
 
    // Add a new book to the stack
    app.post('/books', books.add);
 
    // Remove a book from the stack
    app.delete('/books', books.remove);

}