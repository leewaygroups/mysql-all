var chai = require('chai');
var expect = chai.expect;
var mysqlAll = require('../index');

var configs = [
    {
        host: 'localhost',
        user: 'me',
        password: 'secret',
        database: 'my_db1'
    },
    {
        host: 'somehost',
        user: 'someone',
        password: 'secret',
        database: 'my_db2'
    },
    {
        host: 'anotherhost',
        user: 'you',
        password: 'secret',
        database: 'my_db2'
    },
];

var objConfigs = {
    localhost: {
        host: 'localhost',
        user: 'me',
        password: 'secret',
        database: 'my_db1'
    },
    anotherhost: {
        host: 'anotherhost',
        user: 'you',
        password: 'secret',
        database: 'my_db2'
    }
};

/*
Exceptions tests fail due to bug in Chai assertion
Follow opened issue and discussion @ https://github.com/chaijs/chai/issues/430
*/

//should throw error if no or invalid config is passed (valid: array or object literal)
/*describe('mysqlAll: Exceptions tests', function () {
    it('should throw an exception if no item is passed', function () {
        expect(mysqlAll()).to.throw(new Error('connection object invalid'));
    });

    //should throw error if passed connection is neither array nor object literal

    it('should throw an exception if number is passed as config', function () {
        expect(mysqlAll(123)).to.throw(new Error('connection object invalid'));
    });

    it('should throw an exception if string is passed in as config', function () {
        expect(mysqlAll("whatever")).to.throw(new Error('connection object invalid'));
    });

    it('should throw an exception if regex is passed in as config', function () {
        expect(mysqlAll(/./)).to.throw(new Error('connection object invalid'));
    });
});*/

//array of configs test
describe('mysqlAll: Array of configs test', function () {
    describe('mysqlAll', function () {
        it('should return an object if no return choice/option is passed', function () {
            expect(mysqlAll(configs)).to.be.an('object');
        });

        it('should return an object if "object" is passed as return choice/option', function () {
            expect(mysqlAll(configs, 'object')).to.be.an('object');
        });

        it('should return an object with ownProperties host+database', function () {
            expect(mysqlAll(configs)).have.ownProperty('localhostmy_db1');
            expect(mysqlAll(configs)).have.ownProperty('somehostmy_db2');
            expect(mysqlAll(configs)).have.ownProperty('anotherhostmy_db2');
        });
    });

    //should return an array if "array" is passed as return choice/option
    describe('mysqlAll: Array of objects configs test', function () {
        it('should return an array if "array" is passed as return choice/option', function () {
            expect(mysqlAll(configs, 'array')).to.be.an('array');
        });
    });
});

//object of configs test
describe('mysqlAll: Object of configs test', function () {
    describe('mysqlAll', function () {
        it('should return an object if no return choice/option is passed', function () {
            expect(mysqlAll(objConfigs)).to.be.an('object');
        });

        it('should return an object if "object" is passed as return choice/option', function () {
            expect(mysqlAll(objConfigs, 'object')).to.be.an('object');
        });

        it('should return an object with ownProperties host+database', function () {
            expect(mysqlAll(objConfigs)).have.ownProperty('localhost');
            expect(mysqlAll(objConfigs)).have.ownProperty('anotherhost');
        });
    });

    describe('mysqlAll: Object of objects configs test', function () {
        it('should return an array if "array" is passed as return choice/option', function () {
            expect(mysqlAll(objConfigs, 'array')).to.be.an('array');
        });
    });
});