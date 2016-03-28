var assert = require('assert');
var semver = require('semver');
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

var arrayConnections = mysqlAll(configs, 'array');

//arrayConnections should be type array
//member elements must be type mysql connection
assert.deepEqual(arrayConnections, {
    //TDOD
});