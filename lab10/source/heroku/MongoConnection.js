/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://Yachen:pigenddoG1230/@ds111851.mlab.com:11851/yachen';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

/*
url :   mongodb://root:secure@ds161483.mlab.com:61483/asefall17
 */