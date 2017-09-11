(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Task', '../model/TaskEntry', '../model/TaskPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Task'), require('../model/TaskEntry'), require('../model/TaskPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TasksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Task, root.AlfrescoCoreRestApi.TaskEntry, root.AlfrescoCoreRestApi.TaskPaging);
  }
}(this, function(ApiClient, TaskEntry, TaskPaging) {
  'use strict';

  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.getTasks = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };

      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
      };

      var headerParams = {
      };
      var formParams = {
      };

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
  }

  return exports;
}));
