"use strict";

var jetpack = require('fs-jetpack');
var pathUtil = require('path');
var os = require('os');

// work in default temporary location for this OS
var workingDir = pathUtil.join(os.tmpdir(), 'scattered-store-test');

// 500ms is enough as default timeout
jasmine.getEnv().defaultTimeoutInterval = 300;

module.exports.workingDir = workingDir;

module.exports.beforeEach = function () {
    // ensure working directory exists and is empty
    jetpack.dir(workingDir, { empty: true });
};

module.exports.afterEach = function () {

};
