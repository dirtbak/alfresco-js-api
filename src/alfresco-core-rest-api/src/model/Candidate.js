(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Candidate = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('candidateType')) {
        obj['candidateType'] = ApiClient.convertToType(data['candidateType'], 'String');
      }
      if (data.hasOwnProperty('candidateId')) {
        obj['candidateId'] = ApiClient.convertToType(data['candidateId'], 'String');
      }
    }
    return obj;
  };

  exports.prototype['candidateType'] = undefined;
  exports.prototype['candidateId'] = undefined;

  return exports;
}));
