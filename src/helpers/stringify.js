/**
 * Created by huangxinghui on 2015/10/21.
 */

var Handlebars = require('handlebars');
var _ = require('underscore');

Handlebars.registerHelper('stringify', function(value) {
  return _.map(value, function(key, value) {
    return key + '="' + value + '"';
  }).join(' ');
});