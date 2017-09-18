(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Item = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function (ApiClient, Person) {
  'use strict';

  var exports = function () {

  };

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = Person.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('edited')) {
        obj['edited'] = ApiClient.convertToType(data['edited'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = Person.constructFromObject(data['modifiedBy']);
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
    }
    return obj;
  };

  exports.prototype['id'] = undefined;
  exports.prototype['name'] = undefined;
  exports.prototype['value'] = undefined;
  exports.prototype['title'] = undefined;
  exports.prototype['description'] = undefined;
  exports.prototype['mimeType'] = undefined;
  exports.prototype['createdBy'] = undefined;
  exports.prototype['createdAt'] = undefined;
  exports.prototype['edited'] = undefined;
  exports.prototype['modifiedBy'] = undefined;
  exports.prototype['modifiedAt'] = undefined;
  exports.prototype['size'] = undefined;

  return exports;

}));
