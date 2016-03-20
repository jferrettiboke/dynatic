var fs = require('fs');
var path = require('path');
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

    collection.push({
      title: content.attributes.title,
      slug: content.attributes.slug,
      date: content.attributes.date,
      author: content.attributes.author,
      layout: content.attributes.layout,
      content: content.body,
    });
  });

  fs.writeFileSync('./data/__collection.json', JSON.stringify(collection, null, '\t'), 'utf-8');
});
