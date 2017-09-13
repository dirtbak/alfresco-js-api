(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './Item'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./Item'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ItemEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Item);
  }
}(this, function (ApiClient, Item) {
  'use strict';

  /**
   * Constructs a new <code>ItemEntry</code>.
   * @alias module:model/ItemEntry
   * @class
   * @param entry
   */
  var exports = function (entry) {
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ItemEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemEntry} obj Optional instance to populate.
   * @return {module:model/ItemEntry} The populated <code>ItemEntry</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Item.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Item} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;


}));
