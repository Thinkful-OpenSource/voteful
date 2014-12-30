var express = require('express'),
    router = express.Router(),
    Comment = require('../models/comment');

/* GET - all projects */
// router.get('/', function(req, res) {
  
// });

router.get('/:id', function(req, res) {
  new Comment({id:req.params.id}).fetch().then(function(model){
    res.json(model.toJSON());
  });
});

router.post('/', function(req, res){
  new Comment(comment_params(req.body.comment)).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/:id', function(req, res){
  var comment = comment_params(req.body.comment);
  new Comment(comment).save().then(function(model){
    res.json(model.toJSON());
  });
});

function comment_params(comment){
  for(var prop in comment){
    if(whitelist.indexOf(prop) === -1){
      delete comment[prop];
    }
  }
  return comment;
}

var whitelist = ['id','project_id','text'];

module.exports = router;