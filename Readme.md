# mysql-all

An easy way to connect to multiple mysql databases in one shot.

[![Build Status](https://travis-ci.org/leewaygroups/mysql-all.svg?branch=master)](https://travis-ci.org/leewaygroups/mysql-all)
[![Coverage Status](https://coveralls.io/repos/github/leewaygroups/mysql-all/badge.svg?branch=continuousIntegration)](https://coveralls.io/github/leewaygroups/mysql-all?branch=continuousIntegration)

## Usage
To use in your project, just execute

```js
npm install mysql-all --save
```

This will download mysql-all as well as add it as a dependency to your package.json.

Then require mysql-all in your code:

```js
var mysqlAll = require('mysql-all');

//pass in your connections object and return option
var connections = mysqlAll(connections, option);
```

######  connections is mandatory and must be an array or object/json.
######  option is the return type and it is optional. 
######  If  option is not specified or specified option is neither "array" 
######  nor "object" return type will be defaulted to object.

### Usecases 
For our example usescases, we will use
1. arrayConfigs as array of our connections
2. objectConfigs as object who's members are our connections

```js
var arrayConfigs = [
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
];

var objectConfigs = {
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
```

#### Usecase 1: Array of connections and return type specified as "array"

 ```js
var connections = require('mysql-all')(arrayConfigs, 'array');

//output connections
[conn1, conn2, conn3]
```


#### Usecase 2: Array of connections and return type specified as "object"
```js
var connections = require('mysql-all')(arrayConfigs, 'object');

//outputs an object of connections with host+database name as keys:
{
    localhostmy_db1: 'connection to localhost',
    somehostmy_db2: 'connection to somehost',
    anotherhostmy_db2: 'connection to anotherhost'
}
```


#### Usecase 3: Array of connections and return type specified as "object"
```js
var connections = require('mysql-all')(arrayConfigs);

//outputs an object of connections with host+database name as keys:
{
    localhostmy_db1: 'connection to localhost',
    somehostmy_db2: 'connection to somehost',
    anotherhostmy_db2: 'connection to anotherhost'
}

//NOTE: this yields same result as usecase 2
```


#### Usecase 4: Object of connections and return type specified as "array"
```js
var connections = require('mysql-all')(objectConfigs, 'array');

//output connections
[conn1, conn2]

//NOTE: this yields similar result as usecase 1
```


#### Usecase 5: Object of connections and return type specified as "object"
```js
var connections = require('mysql-all')(objectConfigs, 'object');

//output connections
{
    financedb: 'connection to finance db',
    hrdb: 'connection to hr db'
}

//NOTE: this yields similar result as usecase 3
//except that in this case the keys in the output object will be same as the
// keys in the input connection object/json (objectConfigs) //object/JSON.

//Also not that if 'object' was not specified i.e: require('mysql-all')(objectConfigs);
// output will be same since mysql-all defaults to object when no return option is specified.
```

## Valid connections input types.

1. Array.

2. Object literals and 

3. JSON.


## OK, Go mysql-all!!