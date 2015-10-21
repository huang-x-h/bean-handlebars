/**
 * Created by huangxinghui on 2015/10/21.
 */

var registerHelper = require('../handlebars').registerHelper;

registerHelper('form-item', function(options) {
  var label = options.hash.label || '';

  var ret = '<div class="form-group"><label>' + label + '</label>';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});