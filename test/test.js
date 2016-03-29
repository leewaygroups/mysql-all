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

//var arrayConnections = mysqlAll(configs, 'array');


describe('mysqlAll', function() {
  it('mysqlAll() should throw an exception if no item is passed in', function() {
    expect(mysqlAll()).to.Throw('connection object invalid');
  });
});