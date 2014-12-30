var bookshelf = require('../db/bookshelf')
    
module.exports = bookshelf.Model.extend({
    tableName: 'ip_votes'
});