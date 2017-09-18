(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessDefinition = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('deploymentId')) {
        obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('startFormResourceKey')) {
        obj['startFormResourceKey'] = ApiClient.convertToType(data['startFormResourceKey'], 'String');
      }
      if (data.hasOwnProperty('graphicNotationDefined')) {
        obj['graphicNotationDefined'] = ApiClient.convertToType(data['graphicNotationDefined'], 'Boolean');
      }
    }
    return obj;
  };

  exports.prototype['id'] = undefined;
  exports.prototype['key'] = undefined;
  exports.prototype['name'] = undefined;
  exports.prototype['category'] = undefined;
  exports.prototype['deploymentId'] = undefined;
  exports.prototype['title'] = undefined;
  exports.prototype['description'] = undefined;
  exports.prototype['startFormResourceKey'] = undefined;
  exports.prototype['graphicNotationDefined'] = undefined;

  return exports;

}));
