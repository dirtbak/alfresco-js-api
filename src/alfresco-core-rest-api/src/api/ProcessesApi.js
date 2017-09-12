(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Process', '../model/ProcessEntry', '../model/ProcessPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Process'), require('../model/ProcessEntry'), require('../model/ProcessPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Process,
      root.AlfrescoCoreRestApi.ProcessEntry, root.AlfrescoCoreRestApi.ProcessPaging
    );
  }
}(this, function (ApiClient, ProcessEntry, ProcessPaging) {
  'use strict';

  var exports = function (apiClient) {

    this.apiClient = apiClient || ApiClient.instance;

    this.getProcesses = function (opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};

      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
      };

      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.addProcess = function (processBody, opts) {
      opts = opts || {};
      var postBody = processBody;

      // verify the required parameter 'processBody' is set
      if (processBody == undefined || processBody == null) {
        throw "Missing the required parameter 'processBody' when calling createProcess";
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.deleteProcess = function (processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteProcess";
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getProcess = function (processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcess";
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  }

  return exports;
}));
