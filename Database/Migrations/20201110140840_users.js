/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "users";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("email", 255).unique().notNullable();
    table.datetime("email_verified_at");
    table.string("password", 255).notNullable();
    table.string("remember_token", 100);
    table.enum("admin", ["No", "Yes"]).notNullable();
    table.enum("account_status", ["Inactive", "Active"]).notNullable();
    table.string("verified_status", 255);
    table.string("available_for", 255);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
