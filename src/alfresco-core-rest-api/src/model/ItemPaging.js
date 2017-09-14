(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ItemPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ItemPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ItemPagingList);
  }
}(this, function (ApiClient, ItemPagingList) {
  'use strict';

  /**
   * The ItemPaging model module.
   * @module model/ItemPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ItemPaging</code>.
   * @alias module:model/ItemPaging
   * @class
   */
  var exports = function () {


  };

  /**
   * Constructs a <code>ItemPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemPaging} obj Optional instance to populate.
   * @return {module:model/ItemPaging} The populated <code>ItemPaging</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ItemPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ItemPagingList} list
   */
  exports.prototype['list'] = undefined;


  return exports;
}));
