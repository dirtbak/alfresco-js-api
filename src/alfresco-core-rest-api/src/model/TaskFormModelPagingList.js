(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './TaskFormModelEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./TaskFormModelEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TaskFormModelPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.TaskFormModelEntry);
  }
}(this, function (ApiClient, Pagination, TaskFormModelEntry) {
  'use strict';

  var exports = function (entries, pagination) {
    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [TaskFormModelEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  exports.prototype['entries'] = undefined;
  exports.prototype['pagination'] = undefined;

  return exports;
}));
