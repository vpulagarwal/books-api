const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./src/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./src/route/book.route.js')(app);
 
// Create a Server
const server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})