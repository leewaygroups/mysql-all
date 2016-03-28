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
    //validate configs
    if (!isValidConfigType(configs)) throw "connection object invalid"; 
    
    //init return object/array
    options = options || 'object';
    var connections = options === 'array' ? [] : {};

    switch (options) {
        case 'array':
            buildConnectionsArray(connections, configs);
            break;
        default:
            buildConnectionsObject(connections, configs);
            break;
    }

    return connections;
};

function buildConnectionsArray(connections, configs) {
    if (isArray(configs)) {
        configs.forEach(function (config) {
            connections.push(mysql.createConnection(config));
        });
    } else {
        for (var key in configs) {
            if (configs.hasOwnProperty(key)) {
                connections.push(mysql.createConnection(configs[key]));
            }
        }
    }
}

function buildConnectionsObject(connections, configs) {
   if (isArray(configs)) {
        configs.forEach(function (config) {
            connections[config.host + config.database] = mysql.createConnection(config);
        });
    } else {
        for (var key in configs) {
            if (configs.hasOwnProperty(key)) {
                connections[key] = mysql.createConnection(configs[key]);
            }
        }
    }
}

function isValidConfigType(configs) {
    if (!isArray(configs) && !isObject(configs)) return false;
    return true
}

function isArray(inputArg) {
    return Object.prototype.toString.call(inputArg) === '[object Array]';
}

function isObject(inputArg) {
    return Object.prototype.toString.call(inputArg) === '[object Object]';
}