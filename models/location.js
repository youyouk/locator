var orm = require('orm'),
    config = require('../config');

var db = orm.connect('pg://' + config.database.username  + ':' + config.database.password + '@localhost:5432/' + config.database.db_name, function (success, db) {
  if (!success) { throw new Error('Locator Error: Could not connect to db') };


  Location = db.define("location", {
    "latitude"  :  { "type": "numeric" },
    "longitude" :  { "type": "numeric" },
    "accuracy"  :  { "type": "integer" },
    "comment"   :  { "type": "text" },
    "created"   :  { "type": "timestamp"}
  });

  return db;
});