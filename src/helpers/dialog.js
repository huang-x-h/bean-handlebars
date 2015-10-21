/**
 * Created by huangxinghui on 2015/10/21.
 */

Handlebars.registerHelper('dialog', function(options) {
  var size = '';

  if (options.hash.size) {
    size = ' modal-' + options.hash.size;
  }

  var ret = '<div class="modal-dialog' + size + '"><div class="modal-content">';
  ret += options.fn(this);
  ret += '</div></div>';
  return ret;
});

Handlebars.registerHelper('dialog-header', function(options) {
  var ret = '<div class="modal-header"><button type="button" class="close" data-dismiss aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="modal-title">';
  ret += options.fn(this);
  ret += '</span></div>';
  return ret;
});

Handlebars.registerHelper('dialog-body', function(options) {
  var ret = '<div class="modal-body">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});

Handlebars.registerHelper('dialog-footer', function(options) {
  var ret = '<div class="modal-footer">';
  ret += options.fn(this);
  ret += '</div>';
  return ret;
});