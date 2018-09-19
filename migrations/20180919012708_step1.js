
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table) {
      table.integer('famous_dickhead_id');
      table.foreign('famous_dickhead_id').references('id').inTable('famous_dickheads');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table) {
      table.dropColumn('famous_dickhead_id');
    })
  ]);
};
