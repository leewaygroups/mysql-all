var mysql = require('mysql');

var DEFAULT_EXCLUDE_DIR = /^\./;
var DEFAULT_FILTER = /^([^\.].*)\.js(on)?$/;
var DEFAULT_RECURSIVE = true;

module.exports = function mysqlAll(configs, options) {
    var modules = {};
   
    return modules;
};