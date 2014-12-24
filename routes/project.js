var express = require('express'),
    router = express.Router(),
    Project = require('../models/project');

/* GET - all projects */
router.get('/', function(req, res) {
  Project.fetchAll().then(function(collection){
    res.json(collection.toJSON());
  });
});

router.get('/:id', function(req, res) {
  new Project({id:req.params.id}).fetch().then(function(model){
    res.json(model.toJSON());
  });
});

router.post('/', function(req, res){
  new Project(req.params.project).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/:id', function(req, res){
  new Project(req.params.project).save().then(function(model){
    res.json(model.toJSON());
  });
});

module.exports = router;