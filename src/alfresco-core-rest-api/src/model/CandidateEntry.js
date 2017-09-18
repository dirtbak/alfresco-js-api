(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './Candidate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./Candidate'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CandidateEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Candidate);
  }
}(this, function (ApiClient, Candidate) {
  'use strict';

  var exports = function (entry) {
    this['entry'] = entry;
  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Candidate.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  exports.prototype['entry'] = undefined;

  return exports;
}));
