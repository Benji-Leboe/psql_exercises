const environment = process.env.NODE_ENV || 'development';

const settings = require('./knexfile')[environment];

const knex = require('knex')(settings);

const [ firstName, lastName, birthDate ] = process.argv.slice(2,5);

knex('famous_dickheads').returning(['id', 'first_name', 'last_name', 'birthdate'])
.insert({ first_name: firstName, last_name: lastName, birthdate: birthDate })
.then(result => console.log(result))
.finally(() => {
  knex.destroy();
});