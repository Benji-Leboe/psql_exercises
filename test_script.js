const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const cliQuery = process.argv[2];

function dbConnect(){
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error:", err);
    }
  });
}

function dbQuery(query){
  dbConnect();
  client.query('SELECT $1::int AS number', [query], (err, result) => {
    if (err) {
      return console.error("Query Error:", err);
    }
    console.log(result.rows[0].number);
    client.end();
  });
}

console.log(dbQuery(cliQuery));