# mysql-all

An easy way to connect to multiple mysql database in one shot.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]

## Usage

```js
//USECASE 1. Array of connections as input
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
var connections = require('mysql-all')(configs, 'array');

//output connections
[conn1, conn2, conn3]

var connections = require('mysql-all')(configs, 'object');
//outputs an object of connections with host name as keys:
{
    localhost: 'connection to localhost',
    somehost: 'connection to somehost',
    anotherhost: 'connection to anotherhost'
}


//Valid connections input types.

1. Array as shown in use case.

2. Object of connection objects
configs = {
    localhost:{
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db1'
    },
    anotherhost:{
        host     : 'anotherhost',
        user     : 'you',
        password : 'secret',
        database : 'my_db2'
    }
    ...
};

3. Takes JSON.

Note: In the case where configs is an object literal/JSON and return option is 'object', mysql-all will return an 
object of connections. However, the keys will be same as in input configs object/JSON

//Example:
configs = {
    financedb:{
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db1'
    },
    hrdb:{
        host     : 'anotherhost',
        user     : 'you',
        password : 'secret',
        database : 'my_db2'
    }
};

var connections = require('mysql-all')(configs, 'object');
//output connections
{
    financedb: 'connection to finance db',
    hrdb: 'connection to hr db'
}

```