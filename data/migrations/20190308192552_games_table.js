
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (tbl) => {
      tbl.increments();
      tbl.string('title', 150).notNullable();
      tbl.string('genre', 150).notNullable();
      tbl.integer('release_year');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
