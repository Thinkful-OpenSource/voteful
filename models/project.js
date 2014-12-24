var bookshelf = require('../db/bookshelf')
    
module.exports = bookshelf.Model.extend({
    tableName: 'projects',
    defaults: {
        upvotes: 0,
        downvotes: 0,
        active: true
    },
    initalize: function(){
        this.on('saving', this.validate);
    },
    validate: function(){
        if(this.get('name') === void 0 || this.get('name') === '') return false;
    }
});