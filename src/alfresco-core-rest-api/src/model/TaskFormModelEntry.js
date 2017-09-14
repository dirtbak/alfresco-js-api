(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './TaskFormModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./TaskFormModel'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TaskFormModelEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TaskFormModel);
  }
}(this, function (ApiClient, TaskFormModel) {
  'use strict';

  var exports = function (entry) {
    this['entry'] = entry;
  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = TaskFormModel.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  exports.prototype['entry'] = undefined;

  return exports;


}));
