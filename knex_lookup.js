const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const cliQuery = process.argv.slice(2);

knex.select('first_name', 'last_name').from('famous_dickheads')
  .where(function(){
    this.where('first_name', 'like', `%${cliQuery}%`)
    .orWhere('last_name', 'like', `%${cliQuery}%`);})
  .then(result => console.log(result))
  .finally(() => {
  knex.destroy();
});