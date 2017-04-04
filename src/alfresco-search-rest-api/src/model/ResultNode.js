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
    define(['../../../alfrescoApiClient', '../model/ContentInfo', '../model/Node', '../model/PathInfo', '../model/SearchEntry', '../model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ContentInfo'), require('./Node'), require('./PathInfo'), require('./SearchEntry'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ResultNode = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.ContentInfo, root.AlfrescoContentServicesRestApi.Node, root.AlfrescoContentServicesRestApi.PathInfo, root.AlfrescoContentServicesRestApi.SearchEntry, root.AlfrescoContentServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, Node, PathInfo, SearchEntry, UserInfo) {
  'use strict';




  /**
   * The ResultNode model module.
   * @module model/ResultNode
   * @version 1
   */

  /**
   * Constructs a new <code>ResultNode</code>.
   * @alias module:model/ResultNode
   * @class
   * @extends module:model/Node
   * @param id {String} 
   * @param name {String} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name. 
   * @param nodeType {String} 
   * @param isFolder {Boolean} 
   * @param isFile {Boolean} 
   * @param modifiedAt {Date} 
   * @param modifiedByUser {module:model/UserInfo} 
   * @param createdAt {Date} 
   * @param createdByUser {module:model/UserInfo} 
   */
  var exports = function(id, name, nodeType, isFolder, isFile, modifiedAt, modifiedByUser, createdAt, createdByUser) {
    var _this = this;
    Node.call(_this, id, name, nodeType, isFolder, isFile, modifiedAt, modifiedByUser, createdAt, createdByUser);





  };

  /**
   * Constructs a <code>ResultNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultNode} obj Optional instance to populate.
   * @return {module:model/ResultNode} The populated <code>ResultNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Node.constructFromObject(data, obj);
      if (data.hasOwnProperty('search')) {
        obj['search'] = SearchEntry.constructFromObject(data['search']);
      }
      if (data.hasOwnProperty('archivedByUser')) {
        obj['archivedByUser'] = UserInfo.constructFromObject(data['archivedByUser']);
      }
      if (data.hasOwnProperty('archivedAt')) {
        obj['archivedAt'] = ApiClient.convertToType(data['archivedAt'], 'Date');
      }
      if (data.hasOwnProperty('versionLabel')) {
        obj['versionLabel'] = ApiClient.convertToType(data['versionLabel'], 'String');
      }
      if (data.hasOwnProperty('versionComment')) {
        obj['versionComment'] = ApiClient.convertToType(data['versionComment'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Node.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/SearchEntry} search
   */
  exports.prototype['search'] = undefined;
  /**
   * @member {module:model/UserInfo} archivedByUser
   */
  exports.prototype['archivedByUser'] = undefined;
  /**
   * @member {Date} archivedAt
   */
  exports.prototype['archivedAt'] = undefined;
  /**
   * @member {String} versionLabel
   */
  exports.prototype['versionLabel'] = undefined;
  /**
   * @member {String} versionComment
   */
  exports.prototype['versionComment'] = undefined;



  return exports;
}));


