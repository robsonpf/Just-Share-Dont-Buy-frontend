
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('month_release').del()
    .then(function () {
      // Inserts seed entries
      return knex('month_release').insert([
        {
          id: 1,
          slide_id: 1,
          month: 'June'
       },
       {
         id: 2,
         slide_id: 2,
         month_release: 'July'
       }
      ]);
    });
};
