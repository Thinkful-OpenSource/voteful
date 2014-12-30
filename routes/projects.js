var express = require('express'),
    router = express.Router(),
    Project = require('../models/project'),
    Ip_Vote = require('../models/ip_vote');

/* GET - all projects */
router.get('/', function(req, res) {
  Project.fetchAll({withRelated: 'comments'}).then(function(collection){
    res.json(project_list_result(collection));
  });
});

router.get('/:id', function(req, res) {
  new Project({id:req.params.id}).fetch({withRelated:'comments'}).then(function(model){
    res.json(model.toJSON());
  });
});

router.post('/', function(req, res){
  new Project(project_params(req.body.project)).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/:id', function(req, res){
  var project = project_params(req.body.project);
  new Project(project).save().then(function(model){
    res.json(model.toJSON());
  });
});

router.put('/down/:id', function(req, res)
{
  process_vote(req.params.id, false, req.ip, res);
});

router.put('/up/:id', function(req, res){
  process_vote(req.params.id, true, req.ip, res);
});

function process_vote(id, up, ip, res){
  new Project({id:id}).fetch().then(function(model){
    var project = model;
    new Ip_Vote({ip:ip, project_id:id}).fetch().then(function(ip_vote){
      if(ip_vote === null){ ip_vote = new Ip_Vote();}
      else {return res.json(project.toJSON());}
      var vote = {}, gtg = false, project_model = {};
      if(up){vote.upvotes = project.get('upvotes') + 1;}
      else {vote.downvotes = project.get('downvotes') - 1;}
      new Ip_Vote({ip:ip,project_id:project.id,up:up}).save().then(function(model){
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
    });
  });
}

function project_params(project){
  for(var prop in project){
    if(whitelist.indexOf(prop) === -1){
      delete project[prop];
    }
  }
  return project;
}

function project_list_result(collection)
{
  //collection.load('comments');
  var items = collection.models,i=0;
  for(i=0;i<items.length;i++){
    items[i].set('commentCount', items[i].related('comments').length);
  }
  var prep = collection.toJSON();
  for(i=0;i<prep.length;i++){
    delete prep[i].comments;
  }
  return prep;
}

var whitelist = ['id','name','description','readme','url','upvotes','downvotes','active'];

module.exports = router;