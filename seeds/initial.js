'use strict';

exports.seed = function(knex, Promise) {
  knex('projects').insert({name: 'Adventure Game'});
  knex('projects').insert({name: 'Rock Paper Scissiors'});
  knex('projects').insert({name: 'Color Scheme Search'});
  knex('projects').insert({name: 'Thinkful Swag Ideas'});
  knex('projects').insert({name: 'Student Project Collection'});
  knex('projects').insert({name: 'Student Freelance Interface'});
  knex('projects').insert({name: 'Angular Non-jQuery Full Featured Drag-and-Drop Library'});
  knex('projects').insert({name: 'Web Based Mobile Mockup Tool'});
  knex('projects').insert({name: 'Modularized Portal Framework'});
};