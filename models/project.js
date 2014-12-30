var bookshelf = require('../db/bookshelf'),
    Comment = require('./comment');
    
module.exports = bookshelf.Model.extend({
    tableName: 'projects',
    defaults: {
        upvotes: 0,
        downvotes: 0,
        active: true
    },
    comments: function(){
      return this.hasMany(Comment, 'project_id');  
    },
    initialize: function(){
        this.on('saving', this.validate);
    },
    validate: function(){
        if(this.get('name') === void 0 || this.get('name') === '') return false;
    }
});