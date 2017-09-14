(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Task.
    module.exports = factory(require('../ApiClient'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TaskBody = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Variable);
  }

}(this, function (ApiClient, Variable) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dueAt')) {
        obj['dueAt'] = ApiClient.convertToType(data['dueAt'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Integer');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], [Variable])
      }
    }
    return obj;
  };

  exports.prototype['name'] = undefined;
  exports.prototype['description'] = undefined;
  exports.prototype['dueAt'] = undefined;
  exports.prototype['priority'] = undefined;
  exports.prototype['owner'] = undefined;
  exports.prototype['state'] = undefined;
  exports.prototype['variables'] = undefined;

  return exports;
}));
