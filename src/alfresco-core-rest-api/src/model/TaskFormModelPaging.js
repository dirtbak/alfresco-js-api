(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskFormModelPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskFormModelPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TaskFormModelPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TaskFormModelPagingList);
  }
}(this, function (ApiClient, TaskFormModelPagingList) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TaskFormModelPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  exports.prototype['list'] = undefined;

  return exports;
}));
