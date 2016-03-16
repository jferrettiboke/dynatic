var fs = require('fs');
var path = require('path');
var fm = require('front-matter');

var posts = [];
var dir = path.join(__dirname, 'data/posts');

fs.readdirSync(dir).forEach(function(file) {
  var data = fs.readFileSync(dir + '/' + file, 'utf8');
  var content = fm(data);
  posts.push({
    title: content.attributes.title,
    slug: content.attributes.slug,
    date: content.attributes.date,
    author: content.attributes.author,
    layout: content.attributes.layout,
    content: content.body,
  });
});

fs.writeFileSync('./collections/posts.json', JSON.stringify(posts), 'utf-8');
