const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fm = require('front-matter');
const recursive = require('recursive-readdir');
const config = require('./config');

const readFiles = (callback) => {
  recursive(config.paths.root, function (err, files) {
    callback(files);
  });
};

const build = () => {
  const collection = [];

  readFiles(files => {
    files.forEach(function(file) {
      let fileName = file.split('data');
      let fileExtension = file.split('.');

      fileName = fileName[fileName.length - 1];
      fileExtension = fileExtension[fileExtension.length - 1];

      if (fileExtension !== 'md') return;

      const data = fs.readFileSync(path.join(config.paths.root, fileName), 'utf8');
      const content = fm(data);
      const props = _.assign(content.attributes, {
        title: content.attributes.title,
        route: content.attributes.route,
        layout: content.attributes.layout,
        lang: content.attributes.lang,
        content: content.body
      });

      collection.push(props);
    });

    fs.writeFileSync(`${config.paths.root}/__collection.json`, JSON.stringify(collection, null, '\t'), 'utf-8');
  });
};

build();
