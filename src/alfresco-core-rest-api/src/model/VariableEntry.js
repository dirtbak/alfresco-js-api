(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./Variable'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VariableEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Variable);
  }
}(this, function (ApiClient, Variable) {
  'use strict';

  /**
   * Constructs a new <code>VariableEntry</code>.
   * @alias module:model/VariableEntry
   * @class
   * @param entry
   */
  var exports = function (entry) {
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>VariableEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableEntry} obj Optional instance to populate.
   * @return {module:model/VariableEntry} The populated <code>VariableEntry</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Variable.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Variable} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;
}));
