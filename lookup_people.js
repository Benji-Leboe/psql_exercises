const db = require('./db_connect');

cliQuery = `%${process.argv[2]}%`;

db.connect((err) => {
  if (err) {
    return console.error("Connection Error:", err);
  }
});


function lookup(query){

  db.query('SELECT CONCAT(first_name, \' \', last_name) AS person FROM famous_dickheads WHERE first_name LIKE $1 OR last_name LIKE $1', [query], (err, result) => {
    if (err) {
      return console.error("Query Error:", err);
    }

    for(let entry of result.rows){
      let name = entry;
      console.log(name.person);
    }

    db.end();
  });
}

lookup(cliQuery);