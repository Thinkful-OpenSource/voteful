var express = require('express'),
    router = express.Router(),
    Project = require('../models/project'),
    Ip_Vote = require('../models/ip_vote');

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
  new Project(project_params(req.params.project)).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/:id', function(req, res){
  var project = project_params(req.body.project);
  new Project(project).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/:id/:up', function(req, res){
  var project = project_params(req.body.project);
  new Ip_Vote({ip:req.ip, project_id:project.id}).fetch().then(function(ip_vote){
    if(ip_vote === void 0 || req.params.up != ip_vote.up){
      var vote = {};
      if(req.params.up){vote.upvotes = project.upvotes + 1;}
      else {vote.downvotes = project.downvotes - 1;}
      var gtg = false;
      var project_model = {};
      new Ip_Vote({ip:req.ip,project_id:project.id,up:req.params.up}).save().then(function(model){
        if(gtg){
          res.json(project_model.toJSON());
        } else {
          gtg = true;
        }
      });
      new Project(project).save(vote, {patch: true}).then(function(model){
        if(gtg){
          res.json(model.toJSON());
        } else {
          project_model = model;
          gtg = true;
        }
      });
    }
  });
});

function project_params(project){
  for(var prop in project){
    if(whitelist.indexOf(prop) === -1){
      delete project[prop];
    }
  }
  return project;
}

var whitelist = ['id','name','description','readme','url','upvotes','downvotes','active'];

module.exports = router;