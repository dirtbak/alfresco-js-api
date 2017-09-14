(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessBodyVariable = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('bpm_assignee')) {
        obj['bpm_assignee'] = ApiClient.convertToType(data['bpm_assignee'], 'String');
      }
      if (data.hasOwnProperty('bpm_sendEMailNotifications')) {
        obj['bpm_sendEMailNotifications'] = ApiClient.convertToType(data['bpm_sendEMailNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('bpm_workflowPriority')) {
        obj['bpm_workflowPriority'] = ApiClient.convertToType(data['bpm_workflowPriority'], 'Integer');
      }
    }
    return obj;
  }

  exports.prototype['bpm_assignee'] = undefined;
  exports.prototype['bpm_sendEMailNotifications'] = undefined;
  exports.prototype['bpm_workflowPriority'] = undefined;

  return exports;
}));
