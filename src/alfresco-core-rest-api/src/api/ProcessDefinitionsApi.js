(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      '../ApiClient',
      '../model/ProcessDefinition', '../model/ProcessDefinitionEntry', '../model/ProcessDefinitionPaging',
      '../model/TaskFormModelPaging'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/ProcessDefinition'), require('../model/ProcessDefinitionEntry'), require('../model/ProcessDefinitionPaging'),
      require('../model/TaskFormModelPaging')
    );
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessDefinitionsApi = factory(
      root.AlfrescoCoreRestApi.ApiClient,
      root.AlfrescoCoreRestApi.ProcessDefinition, root.AlfrescoCoreRestApi.ProcessDefinitionEntry, root.AlfrescoCoreRestApi.ProcessDefinitionPaging,
      root.AlfrescoCoreRestApi.TaskFormModelPaging
    );
  }
}(this, function (ApiClient, ProcessDefinitionEntry, ProcessDefinitionPaging, TaskFormModelPaging) {
  'use strict';

  var exports = function (apiClient) {

    this.apiClient = apiClient || ApiClient.instance;

    this.getProcessDefinitions = function (opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};

      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };

      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessDefinitionPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/process-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getProcessDefinition = function (processDefinitionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processDefinitionId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getProcessDefinitionId";
      }

      var pathParams = {
        'processDefinitionId': processDefinitionId
      };
      var queryParams = {
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessDefinitionEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/process-definitions/{processDefinitionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getStartFormModel = function (processDefinitionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processDefinitionId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getStartFormModel";
      }

      var pathParams = {
        'processDefinitionId': processDefinitionId
      };
      var queryParams = {
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskFormModelPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/process-definitions/{processDefinitionId}/start-form-model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getImage = function (processDefinitionId) {
      var postBody = null;

      // verify the required parameter 'processDefinitionId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getImage";
      }

      var pathParams = {
        'processDefinitionId': processDefinitionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'image/png'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/process-definitions/{processDefinitionId}/image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


  }

  return exports;
}));
