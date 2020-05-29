
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('slide').del()
    .then(function () {
      // Inserts seed entries
      return knex('slide').insert([
        {
          id: 1,
          month_release_id: 0
       },
       {
         id: 2,
         month_release_id: 1
       },
       {
         id: 3,
         month_release_id: 2
       },
       {
         id: 4,
         month_release_id: 2
       },
       {
         id: 5,
         month_release_id: 3
       },
       {
         id: 6,
         month_release_id: 0
       },
       {
         id: 7,
         month_release_id: 0
       }
      ]);
    });
};
