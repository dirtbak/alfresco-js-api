(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      '../ApiClient',
      '../model/Task', '../model/TaskEntry', '../model/TaskPaging',
      '../model/CandidatePaging',
      '../model/ItemEntry', '../model/ItemPaging',
      '../model/TaskFormModelPaging',
      '../model/VariableEntry', '../model/VariablePaging'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/Task'), require('../model/TaskEntry'), require('../model/TaskPaging'),
      require('../model/CandidatePaging'),
      require('../model/ItemEntry'), require('../model/ItemPaging'),
      require('../model/TaskFormModelPaging'),
      require('../model/VariableEntry'), require('../model/VariablePaging')
    );
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TasksApi = factory(
      root.AlfrescoCoreRestApi.ApiClient,
      root.AlfrescoCoreRestApi.Task, root.AlfrescoCoreRestApi.TaskEntry, root.AlfrescoCoreRestApi.TaskPaging,
      root.AlfrescoCoreRestApi.CandidatePaging,
      root.AlfrescoCoreRestApi.ItemEntry, root.AlfrescoCoreRestApi.ItemPaging,
      root.AlfrescoCoreRestApi.TaskFormModelPaging,
      root.AlfrescoCoreRestApi.VariableEntry, root.AlfrescoCoreRestApi.VariablePaging
    );
  }
}(this, function (ApiClient, TaskEntry, TaskPaging, CandidatePaging, ItemEntry, ItemPaging, TaskFormModelPaging, VariableEntry, VariablePaging) {
  'use strict';

  var exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.getTasks = function (opts) {
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
      var returnType = TaskPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getTasksForProcess = function (processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getTasksForProcess";
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/processes/{processId}/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getTask = function (taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTask";
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.updateTask = function (taskId, taskBody, opts) {
      opts = opts || {};
      var postBody = taskBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateTask";
      }
      // verify the required parameter 'taskBody' is set
      if (taskBody == undefined || taskBody == null) {
        throw "Missing the required parameter 'taskBody' when calling updateTask";
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'select': opts['select'],
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getCandidates = function (taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getCandidates";
      }

      var pathParams = {
        'taskId': taskId
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
      var returnType = CandidatePaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}/candidates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getItems = function (taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getItems";
      }

      var pathParams = {
        'taskId': taskId
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
        '../../../workflow/versions/1/tasks/{taskId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.addItem = function (taskId, itemBody) {
      var postBody = itemBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addItem";
      }

      // verify the required parameter 'itemBody' is set
      if (itemBody == undefined || itemBody == null) {
        throw "Missing the required parameter 'itemBody' when calling addItem";
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ItemEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.deleteItem = function (taskId, itemId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling deleteItem";
      }
      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteItem";
      }

      var pathParams = {
        'taskId': taskId,
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
        '../../../workflow/versions/1/tasks/{taskId}/items/{itemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getTaskFormModel = function (taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskFormModel";
      }

      var pathParams = {
        'taskId': taskId
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
      var returnType = TaskFormModelPaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}/task-form-model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getVariables = function (taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getVariables";
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariablePaging;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}/variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.addVariable = function (taskId, variableBody) {
      var postBody = variableBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling addVariable";
      }

      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariableEntry;

      return this.apiClient.callApi(
        '../../../workflow/versions/1/tasks/{taskId}/variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.deleteVariable = function (taskId, variableName) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling deleteVariable";
      }
      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling deleteVariable";
      }

      var pathParams = {
        'taskId': taskId,
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
        '../../../workflow/versions/1/tasks/{taskId}/variables/{variableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.updateVariable = function (taskId, variableName, variableBody) {
      var postBody = variableBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateVariable";
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
        'taskId': taskId,
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
        '../../../workflow/versions/1/tasks/{taskId}/variables/{variableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  }

  return exports;
}));
