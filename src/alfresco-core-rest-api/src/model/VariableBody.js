(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VariableBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  exports.prototype['name'] = undefined;
  exports.prototype['value'] = undefined;
  exports.prototype['type'] = undefined;

  return exports;
}));
