(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Process = factory(root.AlfrescoCoreRestApi.ApiClient);
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

      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }

      if (data.hasOwnProperty('businessKey')) {
        obj['businessKey'] = ApiClient.convertToType(data['businessKey'], 'String');
      }

      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
      }

      if (data.hasOwnProperty('endedAt')) {
        obj['endedAt'] = ApiClient.convertToType(data['endedAt'], 'Date');
      }

      if (data.hasOwnProperty('durationInMs')) {
        obj['durationInMs'] = ApiClient.convertToType(data['durationInMs'], 'Integer');
      }

      if (data.hasOwnProperty('startActivityDefinitionId')) {
        obj['startActivityDefinitionId'] = ApiClient.convertToType(data['startActivityDefinitionId'], 'String');
      }

      if (data.hasOwnProperty('endActivityDefinitionId')) {
        obj['endActivityDefinitionId'] = ApiClient.convertToType(data['endActivityDefinitionId'], 'String');
      }

      if (data.hasOwnProperty('startUserId')) {
        obj['startUserId'] = ApiClient.convertToType(data['startUserId'], 'String');
      }

      if (data.hasOwnProperty('deleteReason')) {
        obj['endActivityDefinitionId'] = ApiClient.convertToType(data['endActivityDefinitionId'], 'String');
      }

    }
    return obj;
  };

  exports.prototype['id'] = undefined;
  exports.prototype['processDefinitionId'] = undefined;
  exports.prototype['businessKey'] = undefined;
  exports.prototype['startedAt'] = undefined;
  exports.prototype['endedAt'] = undefined;
  exports.prototype['durationInMs'] = undefined;
  exports.prototype['startActivityDefinitionId'] = undefined;
  exports.prototype['endActivityDefinitionId'] = undefined;
  exports.prototype['startUserId'] = undefined;
  exports.prototype['deleteReason'] = undefined;

}));
