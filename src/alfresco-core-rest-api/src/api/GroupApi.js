(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
             '../ApiClient',
             '../model/Error',
             '../model/Group',
             '../model/GroupEntry',
             '../model/GroupPaging'
           ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/Error'),
      require('../model/Group'),
      require('../model/GroupEntry'),
      require('../model/GroupPaging')
    );
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupApi = factory(
      root.AlfrescoCoreRestApi.ApiClient,
      root.AlfrescoCoreRestApi.Error,
      root.AlfrescoCoreRestApi.Group,
      root.AlfrescoCoreRestApi.GroupEntry,
      root.AlfrescoCoreRestApi.GroupPaging
    );
  }
}(
  this,
  function (
    ApiClient,
    Error,
    Group,
    GroupEntry,
    GroupPaging
  ) {
    'use strict';

    /**
     * Group service.
     * @module api/GroupApi
     * @version 0.1.0
     */

    /**
     * Constructs a new GroupApi
     * @alias module:api/GroupApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
     * if unspecified.
     */
    var exports = function (apiClient) {
      this.apiClient = apiClient || ApiClient.instance;


      /**
       * Get list of groups
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupPaging}
       */
      this.getGroups = function (opts) {
        opts = opts || {};
        var postBody = null;


        var pathParams = {};
        var queryParams = {
          'skipCount': opts['skipCount'],
          'maxItems': opts['maxItems'],
          'orderBy': opts['orderBy'],
          'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
          'where': opts['where'],
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupPaging;

        return this.apiClient.callApi(
          '/groups', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Add a group
       * @param {Object} groupCreateBody GroupCreateBody.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupEntry}
       */
      this.addGroup = function (groupCreateBody, opts) {
        opts = opts || {};
        var postBody = groupCreateBody;

        // verify the required parameter 'group' is set
        if (groupCreateBody == undefined || groupCreateBody == null) {
          throw "Missing the required parameter 'group' when calling addGroup";
        }


        var pathParams = {};
        var queryParams = {
          'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupEntry;

        return this.apiClient.callApi(
          '/groups', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Delete a group
       * @param {String} groupId The identifier of a group.
       * @param {Object} opts Optional parameters
       * @param {Boolean} opts.cascade If true then the delete will be applied in cascade to sub-groups.
       */
      this.deleteGroup = function (groupId, opts) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling deleteGroup";
        }


        var pathParams = {
          'groupId': groupId
        };
        var queryParams = {
          'cascade': opts['cascade']
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = null;

        return this.apiClient.callApi(
          '/groups/{groupId}', 'DELETE',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Get a group
       * @param {String} groupId The identifier of a group.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupEntry}
       */
      this.getGroup = function (groupId, opts) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling getGroup";
        }


        var pathParams = {
          'groupId': groupId
        };
        var queryParams = {
          'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupEntry;

        return this.apiClient.callApi(
          '/groups/{groupId}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Update a group
       * @param {String} groupId The identifier of a group.
       * @param {Object} groupUpdateBody GroupUpdateBody.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupEntry}
       */
      this.updateGroup = function (groupId, groupUpdateBody, opts) {
        opts = opts || {};
        var postBody = groupUpdateBody;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling updateGroup";
        }

        // verify the required parameter 'groupBody' is set
        if (groupUpdateBody == undefined || groupUpdateBody == null) {
          throw "Missing the required parameter 'groupUpdateBody' when calling updateGroup";
        }


        var pathParams = {
          'groupId': groupId
        };
        var queryParams = {
          'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupEntry;

        return this.apiClient.callApi(
          '/groups/{groupId}', 'PUT',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Get group members
       * @param {String} groupId The identifier of a group.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupPaging}
       */
      this.getGroupMembers = function (groupId, opts) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling getGroupMembers";
        }


        var pathParams = {
          'groupId': groupId
        };
        var queryParams = {
          'skipCount': opts['skipCount'],
          'maxItems': opts['maxItems'],
          'orderBy': opts['orderBy'],
          'where': opts['where'],
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupPaging;

        return this.apiClient.callApi(
          '/groups/{groupId}/members', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Add group members
       * @param {String} groupId The identifier of a group.
       * @param {Object} groupMembershipCreateBody GroupMembershipCreateBody.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupEntry}
       */
      this.addGroupMembers = function (groupId, groupMembershipCreateBody, opts) {
        opts = opts || {};
        var postBody = groupMembershipCreateBody;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling addGroupMembers";
        }

        // verify the required parameter 'groupMembershipCreateBody' is set
        if (groupMembershipCreateBody == undefined || groupMembershipCreateBody == null) {
          throw "Missing the required parameter 'groupMembershipCreateBody' when calling addGroupMembers";
        }


        var pathParams = {
          'groupId': groupId
        };
        var queryParams = {
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupEntry;

        return this.apiClient.callApi(
          '/groups/{groupId}/members', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Delete group member
       * @param {String} groupId The identifier of a group.
       * @param {String} groupMemberId The identifier of a group member.
       */
      this.deleteGroupMember = function (groupId, groupMemberId) {
        var postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId == undefined || groupId == null) {
          throw "Missing the required parameter 'groupId' when calling deleteGroupMember";
        }
        // verify the required parameter 'groupMemberId' is set
        if (groupMemberId == undefined || groupMemberId == null) {
          throw "Missing the required parameter 'groupMemberId' when calling deleteGroupMember";
        }


        var pathParams = {
          'groupId': groupId,
          'groupMemberId': groupMemberId
        };
        var queryParams = {};
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = null;

        return this.apiClient.callApi(
          '/groups/{groupId}/members/{groupMemberId}', 'DELETE',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }


      /**
       * Get person groups
       * @param {String} personId The identifier of a person.
       * @param {Object} opts Optional parameters
       * data is of type: {module:model/GroupPaging}
       */
      this.getPersonGroups = function (personId, opts) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'personId' is set
        if (personId == undefined || personId == null) {
          throw "Missing the required parameter 'personId' when calling getPersonGroups";
        }


        var pathParams = {
          'personId': personId,
        };
        var queryParams = {
          'skipCount': opts['skipCount'],
          'maxItems': opts['maxItems'],
          'orderBy': opts['orderBy'],
          'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
          'where': opts['where'],
          'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var returnType = GroupPaging;

        return this.apiClient.callApi(
          '/people/{personId}/groups', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
      }

    };

    return exports;
  }
));
