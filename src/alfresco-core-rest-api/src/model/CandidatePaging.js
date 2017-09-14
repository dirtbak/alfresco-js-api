(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CandidatePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CandidatePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CandidatePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CandidatePagingList);
  }
}(this, function (ApiClient, CandidatePagingList) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = CandidatePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  exports.prototype['list'] = undefined;

  return exports;
}));
