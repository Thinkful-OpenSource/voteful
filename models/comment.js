var bookshelf = require('../db/bookshelf');
    
module.exports = bookshelf.Model.extend({
  tableName: 'comments',
  initalize: function(){
    this.on('saving', this.validate);
  },
  validate: function(){
    if(this.get('project_id') === void 0 || this.get('project_id') === '') return false;
    if(this.get('text') === void 0 || this.get('text') === '') return false;
  }
});