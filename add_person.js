const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const [ firstName, lastName, birthDate ] = process.argv.slice(2,5);

knex('famous_dickheads').returning(['id', 'first_name', 'last_name', 'birthdate'])
.insert({ first_name: firstName, last_name: lastName, birthdate: birthDate })
.then(result => console.log(result))
.finally(() => {
  knex.destroy();
});