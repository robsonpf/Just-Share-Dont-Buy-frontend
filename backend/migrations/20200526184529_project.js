
exports.up = function(knex) {
  return knex.schema.createTable('project', table => {
  table.increments("id")
  table.integer("month_release_id")
  table.string("name")
  table.string("project_status")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("project")
};
