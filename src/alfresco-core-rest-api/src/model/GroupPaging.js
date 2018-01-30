(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './GroupPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.GroupPagingList);
  }
}(this, function(ApiClient, GroupPagingList) {
  'use strict';




  /**
   * The GroupPaging model module.
   * @module model/GroupPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupPaging</code>.
   * @alias module:model/GroupPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GroupPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupPaging} obj Optional instance to populate.
   * @return {module:model/GroupPaging} The populated <code>GroupPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = GroupPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GroupPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


