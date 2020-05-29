
exports.up = function(knex) {
  return knex.schema.createTable('project_update', table => {
  table.increments("id")
  table.integer("project_id")
  table.string("update")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("project_update")
};
