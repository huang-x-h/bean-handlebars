/**
 * Created by huangxinghui on 2015/10/21.
 */

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "./index.js"
  },
  externals: {
    handlebars: 'Handlebars',
    underscore: '_'
  }
};
