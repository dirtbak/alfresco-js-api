(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './ProcessDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./ProcessDefinition'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessDefinitionEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ProcessDefinition);
  }
}(this, function (ApiClient, ProcessDefinition) {
  'use strict';

  /**
   * Constructs a new <code>ProcessDefinitionEntry</code>.
   * @alias module:model/ProcessDefinitionEntry
   * @class
   * @param entry
   */
  var exports = function (entry) {
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ProcessDefinitionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinitionEntry} obj Optional instance to populate.
   * @return {module:model/ProcessDefinitionEntry} The populated <code>ProcessDefinitionEntry</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ProcessDefinition.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProcessDefinition} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;


}));
