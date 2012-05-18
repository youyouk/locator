
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , orm = require('orm');

var app = module.exports = express.createServer();
var db = orm.connect('pg://loc_user:TODO_change@localhost:5432/loc_db', function (success, db) {
  
  // TODO
  

var Location = db.define("location", {
  "latitude"  :  { "type": "numeric" },
  "longitude" :  { "type": "numeric" },
  "accuracy"  :  { "type": "integer" },
  "comment"   :  { "type": "text" },
  "created"   :  { "type": "timestamp"}
});

//Location.sync();


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes

app.get('/', routes.index);
app.post('/', function(req, res){
  console.log(req.body.location);
  
  var loc = new Location({
    "latitude"  :  req.body.location.lat,
    "longitude" :  req.body.location.lon,
    "accuracy"  :  req.body.location.acc,
    "comment"   :  req.body.location.comment,
    "created"   :  req.body.location.timest
  });
  
  loc.save(function (err, locCopy) {
      if (!err) {
          console.log("Saved! ID=" + loc.id); // you can use John or JohnCopy
      } else {
          console.log("Something went wrong...");
          console.dir(err);
      }
  });
  
  res.redirect('back');
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

});
