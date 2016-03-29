//var assert = require('assert');
//var semver = require('semver');
var chai = require('chai');
var expect = chai.expect;
var mysqlAll = require('../index');

var configs = [
    {
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db1'
    },
    {
        host     : 'somehost',
        user     : 'someone',
        password : 'secret',
        database : 'my_db2'
    },
    {
        host     : 'anotherhost',
        user     : 'you',
        password : 'secret',
        database : 'my_db2'
    },
]

//var arrayConnections = mysqlAll();
//var arrayConnections = mysqlAll(configs)
//var arrayConnections = mysqlAll(configs, 'array');


//array of configs test
describe('mysqlAll', function() {
  it('should return an object if no return choice/option is passed', function() {
    expect(mysqlAll(configs)).to.be.an('object');
  });
  
  it('should return an object if "object" is passed as return choice/option', function() {
    expect(mysqlAll(configs, 'object')).to.be.an('object');
  });
  
  it('should return an object with ownProperties host+database', function(){
      expect(mysqlAll(configs)).have.ownProperty('localhostmy_db1');
      expect(mysqlAll(configs)).have.ownProperty('somehostmy_db2');
      expect(mysqlAll(configs)).have.ownProperty('anotherhostmy_db2');
  });
});

//should return an array if "array" is passed as return choice/option
describe('mysqlAll: Array configs test', function() {
  it('should return an array if "array" is passed as return choice/option', function() {
    expect(mysqlAll(configs, 'array')).to.be.an('array');
  });
});