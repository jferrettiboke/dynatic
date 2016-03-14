var fs = require('fs');
var path = require('path');

var posts = [];
var dir = path.join(__dirname, 'data/posts');

fs.readdirSync(dir).forEach(function(file) {
  var data = fs.readFileSync(dir + '/' + file);
  var post = data.toString();
  var header = post.match(/%%%\n([\s\S]*?)\n%%%/);

  var vars = {};
  var _vars = header[1].split('\n');

  _vars.forEach(function(v, k) {
    var _var = v.split(': ');
    vars[_var[0]] = _var[1];
  });

  //var slug = file.replace('.md', '');
  var content = post.replace(header[0], '');

  posts.push({
    slug: vars.slug,
    date: vars.date,
    title: vars.title,
    content: content,
    author: vars.author
  });
});

fs.writeFileSync('./collections/posts.json', JSON.stringify(posts), 'utf-8');
