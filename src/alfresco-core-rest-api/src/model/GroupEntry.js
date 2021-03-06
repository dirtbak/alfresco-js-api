(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';

  /**
   * The GroupEntry model module.
   * @module model/GroupEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupEntry</code>.
   * @alias module:model/GroupEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>GroupEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupEntry} obj Optional instance to populate.
   * @return {module:model/GroupEntry} The populated <code>GroupEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Group.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Group} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
