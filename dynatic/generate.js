const path = require('path');
const child_process = require('child_process');
const config = require('./config');

const generate = (dir = 'static', port = 8080) => {
  const process = child_process.spawn('wget', [
    '--recursive',
    '--convert-links',
    '--page-requisites',
    '--no-parent',
    '--directory-prefix',
    path.join(__dirname, '..', dir),
    '--no-host-directories',
    '--restrict-file-names=unix',
    'http://localhost:${port}/'
  ]);
};

generate();
