var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var fm = require('front-matter');
var recursive = require('recursive-readdir');

var dir = path.join(__dirname, 'data');
var collection = [];

recursive(dir, function (err, files) {
  files.forEach(function(file) {
    var fileName = file.split('data');
    var fileExtension = file.split('.');

    fileName = fileName[fileName.length - 1];
    fileExtension = fileExtension[fileExtension.length - 1];

    if (fileExtension !== 'md') return;

    var data = fs.readFileSync(path.join(__dirname, 'data', fileName), 'utf8');
    var content = fm(data);
    var props = _.assign(content.attributes, {
      title: content.attributes.title,
      slug: content.attributes.slug,
      component: content.attributes.component || content.attributes.layout,
      lang: content.attributes.lang || '',
      content: content.body
    });

    collection.push(props);
  });

  fs.writeFileSync('./data/__collection.json', JSON.stringify(collection, null, '\t'), 'utf-8');
});
