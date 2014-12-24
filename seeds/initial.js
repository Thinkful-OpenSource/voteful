'use strict';

exports.seed = function(knex, Promise) {
  return knex('projects').insert([{name: 'Adventure Game'},
  {name: 'Rock Paper Scissiors'},
  {name: 'Color Scheme Search'},
  {name: 'Thinkful Swag Ideas'},
  {name: 'Student Project Collection'},
  {name: 'Student Freelance Interface'},
  {name: 'Angular Non-jQuery Full Featured Drag-and-Drop Library'},
  {name: 'Web Based Mobile Mockup Tool'},
  {name: 'Modularized Portal Framework'}]);
};