
exports.up = function(knex) {
  return knex.schema.createTable('slide', table => {
    table.increments("id")
    table.integer("month_release_id").notNullable()
    table.foreign("month_release_id").references("month_release.id").onDelete("CASCADE")
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("slide")
};
