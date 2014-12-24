var knex = require('knex')({
    client: 'pg',
    connection: {
      database: 'voteful',
      user:     'postgres',
      password: 'thinkful'
    }}),
    bookshelf = require('bookshelf')(knex);
    
module.exports = bookshelf;