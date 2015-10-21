/**
 * Created by huangxinghui on 2015/10/21.
 */

var Handlebars = require('handlebars');
var NAMESPACE = 'bean_';

module.exports = function registerHelper(name, fn) {
  Handlebars.registerHelper(NAMESPACE + name, fn)
};