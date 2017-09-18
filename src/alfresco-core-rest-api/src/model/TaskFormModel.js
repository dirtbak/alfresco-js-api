(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TaskFormModel = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('dataType')) {
        obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('qualifiedName')) {
        obj['qualifiedName'] = ApiClient.convertToType(data['qualifiedName'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
      }
      if (data.hasOwnProperty('allowedValues')) {
        obj['allowedValues'] = ApiClient.convertToType(data['allowedValues'], ['String']);
      }
    }
    return obj;
  };

  exports.prototype['dataType'] = undefined;
  exports.prototype['title'] = undefined;
  exports.prototype['qualifiedName'] = undefined;
  exports.prototype['name'] = undefined;
  exports.prototype['required'] = undefined;
  exports.prototype['defaultValue'] = undefined;
  exports.prototype['allowedValues'] = undefined;

  return exports;
}));
