(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './GroupEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./GroupEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.GroupEntry);
  }
}(this, function(ApiClient, Pagination, GroupEntry) {
  'use strict';




  /**
   * The GroupPagingList model module.
   * @module model/GroupPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupPagingList</code>.
   * @alias module:model/GroupPagingList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GroupPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupPagingList} obj Optional instance to populate.
   * @return {module:model/GroupPagingList} The populated <code>GroupPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [GroupEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/GroupEntry>} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


