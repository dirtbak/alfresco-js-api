(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './ItemEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./ItemEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ItemPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.ItemEntry);
  }
}(this, function (ApiClient, Pagination, ItemEntry) {
  'use strict';

  /**
   * The ItemPagingList model module.
   * @module model/ItemPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ItemPagingList</code>.
   * @alias module:model/ItemPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function (entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>ItemPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemPagingList} obj Optional instance to populate.
   * @return {module:model/ItemPagingList} The populated <code>ItemPagingList</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [ItemEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/ItemEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  return exports;
}));
