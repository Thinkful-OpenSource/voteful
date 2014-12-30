'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('ip_votes', function(table){
    table.increments().primary();
    table.string('ip').notNullable();
    table.integer('project_id').references('projects.id').notNullable();
    table.boolean('up').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ip_votes');
};
