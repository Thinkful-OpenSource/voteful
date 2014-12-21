'use strict';

exports.up = function(knex, Promise) {
  knex.schema.table('projects', function(table){
    table.dropColumn('name');
    table.string('name').notNullable();
    table.dropColumn('upvotes');
    table.integer('upvotes').defaultTo(0).notNullable();
    table.dropColumn('downvotes');
    table.integer('downvotes').defaultTo(0).notNullable();
    table.dropColumn('active');
    table.boolean('active').defaultTo(true).notNullable();
  });
  knex.schema.table('comments', function(table){
    table.dropColumn('text');
    table.string('text').notNullable()
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('projects', function(table){
    table.dropColumn('name');
    table.string('name');
    table.dropColumn('upvotes');
    table.integer('upvotes');
    table.dropColumn('downvotes');
    table.integer('downvotes');
    table.dropColumn('active');
    table.boolean('active');
  });
  knex.schema.table('comments', function(table){
    table.dropColumn('text');
    table.string('text');
  });
};
