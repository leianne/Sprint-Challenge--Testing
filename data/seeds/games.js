
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: "GTA", genre: 'Teen'},
        {title: "Vice City", genre: 'Teen'},
        {title: "COD", genre: 'Teen'}
      ]);
    });
};
