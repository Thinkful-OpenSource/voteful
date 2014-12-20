'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('projects', function(table){
    table.increments().primary();
    table.string('name');
    table.string('description');
    table.string('readme');
    table.string('url');
    table.integer('upvotes');
    table.integer('downvotes');
    table.boolean('active');
    table.timestamps();
  });
  knex.schema.createTable('comments', function(table){
    table.increments().primary();
    table.integer('project_id').references('projects.id');
    table.string('text');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('comments');
  knex.schema.dropTable('projects');
};
