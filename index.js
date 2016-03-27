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
    //init return object/array
    options = options || 'object';
    var connections = options === 'array'? [] : {};
    
    //validate configs
    var result = isValidConfigType(configs);
    if(!result) throw "connection object invalid";   
   
    return connections;
};

function isValidConfigType(configs){
    if(!isArray(configs) && !isObject(configs)) return null;
    if(isArray(configs)) return 'array';
    return 'object';
}

function isArray(inputArg){
    return Object.prototype.toString.call(inputArg) === '[object Array]';
}

function isObject(inputArg){
     return Object.prototype.toString.call(inputArg) === '[object Object]';
}