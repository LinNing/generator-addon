'use strict';

/*global describe, before, it*/

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('mAuthor:addon', function () {

  describe('all defaults', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(os.tmpdir(), './temp-test-app'))
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'resources',
        'css.scss',
        'dependencies.xml',
        'model.json',
        'presenter.js',
        'preview.html',
        'view.html'
      ]);
    });
  });

});
