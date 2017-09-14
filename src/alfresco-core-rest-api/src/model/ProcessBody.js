(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './ProcessBodyVariable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./ProcessBodyVariable'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessBody = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ProcessBodyVariable);
  }
}(this, function (ApiClient, ProcessBodyVariable) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processDefinitionKey')) {
        obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ProcessBodyVariable.constructFromObject(data['variables']);
      }
    }
    return obj;
  }

  exports.prototype['processDefinitionKey'] = undefined;
  exports.prototype['variables'] = undefined;

  return exports;
}));
