'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table){
    table.increments().primary();
    table.string('name').notNullable();
    table.string('description');
    table.string('readme');
    table.string('url');
    table.integer('upvotes').defaultTo(0).notNullable();
    table.integer('downvotes').defaultTo(0).notNullable();
    table.boolean('active').defaultTo(true).notNullable();
    table.timestamps();
  }).createTable('comments', function(table){
    table.increments().primary();
    table.integer('project_id').references('projects.id').notNullable();
    table.string('text').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
  .dropTable('projects');
};
