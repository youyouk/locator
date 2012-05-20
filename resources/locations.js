var util = require('util');
var orm = require('orm');
var config = require('../config')

exports.index = function(req, res) {
  console.log(orm.location.find(function(locs){
      res.render('locations/index', { title: 'Locations', locations: locs });
      //res.send(loc);
    }
  ));
};

exports.show = function(req, res) {
  orm.location.get(req.location, function(loc){
    loc ? res.render('locations/show', { title: 'Viewing Location' , location: loc, config: config }) : res.send('Not found');
  });
};

exports.new = function(req, res) {
  res.send('location#new')
};

exports.create = function(req, res) {
  var loc = new orm.location({
    "latitude"  :  req.body.location.lat,
    "longitude" :  req.body.location.lon,
    "accuracy"  :  req.body.location.acc,
    "comment"   :  req.body.location.comment,
    "created"   :  req.body.location.timest
  });
  
  loc.save(function (err, locCopy) {
    if (!err) {
        console.log("Saved! ID=" + loc.id);
    } else {
        console.log("Something went wrong...");
        console.dir(err);
    }
  });
  res.redirect('back');
};

exports.edit = function(req, res) {
  res.send('location#edit: ' + util.inspect(req.location));
};

exports.update = function(req, res) {
  res.send('location#update')
};

exports.load = function(id, fn) {
  fn(null, id);
};