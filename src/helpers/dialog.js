/**
 * Created by huangxinghui on 2015/10/21.
 */

var registerHelper = require('../registerHelper');

registerHelper('dialog', function(options) {
  var ret = '<div class="modal fade"><div class="modal-dialog"><div class="modal-content">';
  ret += options.fn(this);
  ret += '</div></div></div>';
  return ret;
});

registerHelper('dialog-header', function(options) {
  var ret = '<div class="modal-header"><button type="button" class="close" data-dismiss aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="modal-title">';
  ret += options.fn(this);
  ret += '</span></div>';
  return ret;
});

registerHelper('dialog-body', function(options) {
  var ret = '<div class="modal-body">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});

registerHelper('dialog-footer', function(options) {
  var ret = '<div class="modal-footer">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});