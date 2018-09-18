const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const cliQuery = process.argv.slice(2,5);

console.log(cliQuery);

const [ firstName, lastName, birthDate ] = cliQuery;

knex('famous_dickheads').returning(['id', 'first_name', 'last_name', 'birthdate'])
.insert({ first_name: firstName, last_name: lastName, birthdate: birthDate })
.then(result => console.log(result))
.finally(() => {
  knex.destroy();
});