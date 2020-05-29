
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_update').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_update').insert([
        {
          id: 1,
          project_id: 1,
          update: 'Two rounds of Peak load tests completed'
       },
       {
         id: 2,
         project_id: 1,
         update: 'Pending: Endurance test – ETC-5/26 '
      }
      ]);
    });
};
