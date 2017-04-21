const path = require('path');

const _root = path.resolve(__dirname, '..');

let root = function(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join(...[_root].concat(args));
};

const BUILD_PATH = path.resolve(__dirname, '../dist');

const AUTOPREFIXER_CONF = {
  browsers: ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24',
    'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 7'],
  cascade: false
};

module.exports = {BUILD_PATH, AUTOPREFIXER_CONF, root};
