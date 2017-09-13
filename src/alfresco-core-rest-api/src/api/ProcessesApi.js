(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      '../ApiClient',
      '../model/Process', '../model/ProcessEntry', '../model/ProcessPaging',
      '../model/ItemEntry', '../model/ItemPaging',
      '../model/VariableEntry', '../model/VariablePaging'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/Process'), require('../model/ProcessEntry'), require('../model/ProcessPaging'),
      require('../model/ItemEntry'), require('../model/ItemPaging'),
      require('../model/VariableEntry'), require('../model/VariablePaging')
    );
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ProcessesApi = factory(
      root.AlfrescoCoreRestApi.ApiClient,
      root.AlfrescoCoreRestApi.Process, root.AlfrescoCoreRestApi.ProcessEntry, root.AlfrescoCoreRestApi.ProcessPaging,
      root.AlfrescoCoreRestApi.ItemEntry, root.AlfrescoCoreRestApi.ItemPaging,
      root.AlfrescoCoreRestApi.VariableEntry, root.AlfrescoCoreRestApi.VariablePaging
    );
  }
}(this, function (ApiClient, ProcessEntry, ProcessPaging, ItemEntry, ItemPaging, VariableEntry, VariablePaging) {
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

    this.addItem = function (processId, itemBody, opts) {
      opts = opts || {};

      var postBody = itemBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addItem";
      }

      // verify the required parameter 'itemBody' is set
      if (itemBody == undefined || itemBody == null) {
        throw "Missing the required parameter 'itemBody' when calling addItem";
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
      var returnType = ItemEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getItems = function (processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getItems";
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ItemPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.deleteItem = function (processId, itemId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteItem";
      }
      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteItem";
      }

      var pathParams = {
        'processId': processId,
        'itemId': itemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/items/{itemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getVariables = function (processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getVariables";
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariablePaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.addVariable = function (processId, variableBody, opts) {
      opts = opts || {};

      var postBody = variableBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling addVariable";
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
      var returnType = VariableEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.deleteVariable = function (processId, variableName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteVariable";
      }
      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling deleteVariable";
      }

      var pathParams = {
        'processId': processId,
        'variableName': variableName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/variables/{variableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.updateVariable = function (processId, variableName, variableBody, opts) {
      opts = opts || {};
      var postBody = variableBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling updateVariable";
      }
      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling updateVariable";
      }
      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling updateVariable";
      }

      var pathParams = {
        'processId': processId,
        'variableName': variableName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariableEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/variables/{variableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  }

  return exports;
}));
