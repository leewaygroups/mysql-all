/*var configs = [
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
var connections = require('mysql-all')(configs, 'array');*/


var mysql = require('mysql');

module.exports = function mysqlAll(configs, options) {
    options = options || 'object';
    var modules = options === 'array'? [] : {};
   
    return modules;
};