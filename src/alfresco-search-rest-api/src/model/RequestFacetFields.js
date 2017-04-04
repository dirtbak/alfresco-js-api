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
    define(['../../../alfrescoApiClient', '../model/RequestFacetFieldsFacets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RequestFacetFieldsFacets'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestFacetFields = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.RequestFacetFieldsFacets);
  }
}(this, function(ApiClient, RequestFacetFieldsFacets) {
  'use strict';




  /**
   * The RequestFacetFields model module.
   * @module model/RequestFacetFields
   * @version 1
   */

  /**
   * Constructs a new <code>RequestFacetFields</code>.
   * Simple facet fields to include The Properties reflect the global properties related to field facts in SOLR. They are descripbed in detail by the SOLR documentation 
   * @alias module:model/RequestFacetFields
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RequestFacetFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestFacetFields} obj Optional instance to populate.
   * @return {module:model/RequestFacetFields} The populated <code>RequestFacetFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('facets')) {
        obj['facets'] = ApiClient.convertToType(data['facets'], [RequestFacetFieldsFacets]);
      }
    }
    return obj;
  }

  /**
   * Define specifc fields on which to facet (adds SOLR facet.field and f.<field>.facet.* options) 
   * @member {Array.<module:model/RequestFacetFieldsFacets>} facets
   */
  exports.prototype['facets'] = undefined;



  return exports;
}));


