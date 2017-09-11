(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./Process'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Process);
  }
}(this, function (ApiClient, Process) {
  'use strict';

  /**
   * Constructs a new <code>ProcessEntry</code>.
   * @alias module:model/ProcessEntry
   * @class
   * @param entry
   */
  var exports = function (entry) {
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ProcessEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessEntry} obj Optional instance to populate.
   * @return {module:model/ProcessEntry} The populated <code>ProcessEntry</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Process.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Process} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;


}));
