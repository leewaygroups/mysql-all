var assert = require('assert');
var semver = require('semver');
var mysqlAll = require('../index');

var arrayConnections = mysqlAll();

assert.deepEqual(arrayConnections, {
    //TDOD
});