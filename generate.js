const child_process = require('child_process');

var process = child_process.spawn('wget', [
  '--recursive',
  '--convert-links',
  '--page-requisites',
  '--no-parent',
  '--directory-prefix',
  'static',
  '--no-host-directories',
  '--restrict-file-names=unix',
  'http://localhost:8080/'
]);
