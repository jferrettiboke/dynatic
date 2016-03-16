var fs = require('fs');
var path = require('path');
var fm = require('front-matter');

var collection = [];
var dir = path.join(__dirname, 'data');

fs.readdirSync(dir).forEach(function(file) {
  var fileName = file.split('.');
  var fileIndex = fileName.length - 1;
  var fileExtension = fileName[fileIndex];
  if (fileExtension !== 'md') return;
  var data = fs.readFileSync(dir + '/' + file, 'utf8');
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

fs.writeFileSync('./data/collection.json', JSON.stringify(collection), 'utf-8');
