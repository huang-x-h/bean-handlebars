/**
 * Created by huangxinghui on 2015/10/21.
 */

var _ = require('underscore');
var Handlebars = require('handlebars');
var registerHelper = require('../registerHelper');
var template = Handlebars.compile('<div class="checkbox {{#if disabled}}disabled{{/if}}">' +
    '<label><input type="checkbox" value="{{value}}" {{#if disabled}}disabled{{/if}} {{#stringify attrs}}{{/stringify}}>{{label}}</label></div>');

registerHelper('checkbox', function(value, options) {
  var context = _.extend({}, value, {attrs: options.hash});
  return template(context);
});