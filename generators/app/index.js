'use strict';

require('../../lib/update.js');

var async = require('async');
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var user = require('../../lib/user.js');
var time = require('../../lib/time.js');

module.exports = yeoman.generators.Base.extend({

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tiptop mAuthor Addon generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'addonname',
        message: 'addon名:',
        default: this.appname
      }
    ];

    this.prompt(prompts, function(answers) {
      this.addonname = answers.addonname.replace(/\s/g, '-');

      this.user = user(this);
      this.time = time();

      done();
    }.bind(this));
  },

  writing: {

    addon: function() {
      this.directory('resources', 'resources');

      this.template('_presenter.js', 'presenter.js');

      this.src.copy('_css.scss', 'css.scss');
      this.src.copy('_dependencies.xml', 'dependencies.xml');
      this.src.copy('_model.json', 'model.json');
      this.src.copy('_preview.html', 'preview.html');
      this.src.copy('_view.html', 'view.html');
    }

  },

  end: function() {
    var that = this;

    function handleFolder(dest, folderDone) {
      dest = path.join(that.destinationRoot(), dest);

      function handleFile(file, fileDone) {
        file = path.join(dest, file);

        fs.unlink(file, function() {
          that.log.info(path.relative(process.cwd(), file), 'cleared!');
          fileDone();
        });
      }

      var files = that.expandFiles('**', { dot: true, cwd: dest })
        // filter
        .filter(function(file) {
          return /\.(git|npm)ignore$/.test(file);
        });

      async.each(files, handleFile, function(err) {
        if (err) {
          that.log.error(err);
        }

        folderDone();
      });
    }

    that.log.info('Cleaning temporary files ...');
    that.log.ok('开始苦逼的代码之旅吧!!!!');
    that.log.ok('在代码在飞会儿，让我在休息会儿！！');
  }

});
