/**
 * Created by huangxinghui on 2015/10/21.
 */

var _ = require('underscore');
var Handlebars = require('handlebars');
var registerHelper = require('../registerHelper');
var template = Handlebars.compile('<div class="radio {{#if disabled}}disabled{{/if}}">' +
    '<label><input type="radio" value="{{value}}"{{#if checked}} checked{{/if}}{{#if disabled}} disabled{{/if}} {{#stringify attrs}}{{/stringify}}>{{label}}</label></div>');

registerHelper('radio', function(value, options) {
  var context = _.extend({}, value, {attrs: options.hash});
  return template(context);
});