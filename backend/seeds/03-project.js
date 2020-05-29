
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1,
          month_release_id: 1,
          name: 'P&T_PO_32 Boost XP',
          project_status: "GREEN"
       },
       {
         id: 2,
         month_release_id: 1,
         name: 'P&T_BO_BAC_05',
         project_status: "GREEN"
      },
      {
        id: 3,
        month_release_id: 1,
        name: 'P&T_FO_SAL_01',
        project_status: "GREEN"
     },
     {
       id: 4,
       month_release_id: 2,
       name: 'Day 1 Readiness',
       project_status: "GREEN"
    },
    {
      id: 5,
      month_release_id: 2,
      name: 'P&T_BO_SUP_02',
      project_status: "GREEN"
   },
   {
     id: 6,
     month_release_id: 2,
     name: 'P&T_BO_SUP_03',
     project_status: "GREEN"
  },
  {
    id: 7,
    month_release_id: 2,
    name: 'P&T_BO_CRE_01',
    project_status: "GREEN"
 },
 {
   id: 8,
   month_release_id: 2,
   name: 'P&T_BO_SUP_01 Master Data',
   project_status: "GREEN"
},
{
  id: 9,
  month_release_id: 3,
  name: 'P&T_FO_MIG_01',
  project_status: "YELLOW"
}

      ]);
    });
};
