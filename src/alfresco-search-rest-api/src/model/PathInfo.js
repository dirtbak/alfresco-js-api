/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/PathElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./PathElement'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.PathInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.PathElement);
  }
}(this, function(ApiClient, PathElement) {
  'use strict';




  /**
   * The PathInfo model module.
   * @module model/PathInfo
   * @version 1
   */

  /**
   * Constructs a new <code>PathInfo</code>.
   * @alias module:model/PathInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PathInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathInfo} obj Optional instance to populate.
   * @return {module:model/PathInfo} The populated <code>PathInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [PathElement]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isComplete')) {
        obj['isComplete'] = ApiClient.convertToType(data['isComplete'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PathElement>} elements
   */
  exports.prototype['elements'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} isComplete
   */
  exports.prototype['isComplete'] = undefined;



  return exports;
}));


