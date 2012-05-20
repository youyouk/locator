var express = require('express')
  , routes = require('./routes')
  , config = require('./config')
  , resource = require('express-resource')
  , location = require('./models/location');
  
var app = module.exports = express.createServer();

// App configuration

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
app.resource('locations', require('./resources/locations'));

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);