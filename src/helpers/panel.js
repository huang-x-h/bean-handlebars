/**
 * Created by huangxinghui on 2015/10/21.
 */

Handlebars.registerHelper('panel', function(options) {
  var theme = 'panel-default';

  if (options.hash.theme) {
    theme = 'panel-' + options.hash.theme;
  }

  var ret = '<div class="panel ' + theme + '">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});

Handlebars.registerHelper('panel-header', function(options) {
  var ret = '<div class="panel-heading"><span class="panel-title">';
  ret += options.fn(this);
  ret += '</span></div>';
  return ret;
});

Handlebars.registerHelper('panel-collapse-header', function(options) {
  var ret = '<div class="panel-heading"><span class="panel-title">';
  ret += options.fn(this);
  ret += '</span><button type="button" class="close pull-right"><i class="glyphicon glyphicon-chevron-down"></i></button></div>';
  return ret;
});

Handlebars.registerHelper('panel-body', function(options) {
  var ret = '<div class="panel-body">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});

Handlebars.registerHelper('panel-collapse-body', function(options) {
  var ret = '<div class="panel-collapse"><div class="panel-body">';
  ret += options.fn(this);
  ret += '</div></div>';
  return ret;
});

Handlebars.registerHelper('panel-footer', function(options) {
  var ret = '<div class="panel-footer">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});