/**
 * Created by huangxinghui on 2015/10/21.
 */

var pkg = require('./package.json');
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: pkg.name + ".js"
  },
  externals: {
    handlebars: 'Handlebars',
    underscore: '_'
  }
};
