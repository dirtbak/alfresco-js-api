/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var GroupMock = require('../test/mockObjects/mockAlfrescoApi').Group;
var expect = require('chai').expect;

describe('Groups', function () {

  beforeEach(function (done) {
    this.hostEcm = 'http://127.0.0.1:8080';

    this.authResponseMock = new AuthResponseMock(this.hostEcm);
    this.groupMock = new GroupMock(this.hostEcm);

    this.authResponseMock.get201Response();
    this.alfrescoJsApi = new AlfrescoApi({
      hostEcm: this.hostEcm
    });

    this.alfrescoJsApi.login('admin', 'admin').then(() => {
      done();
    });
  });

  it('should get groups', function (done) {
    this.groupMock.get200Groups();
    this.alfrescoJsApi.core.groupApi.getGroups().then(function (data) {
      expect(data.list.entries[0].entry.displayName).to.be.equal('ALFRESCO_ADMINISTRATORS');
      done();
    }, function () {
        });
  });

  it('should create group', function (done) {
    this.groupMock.get201CreationGroup();

    var body = {
      'id': 'GROUP_EDO_MODEL_ADMIN',
      'displayName': 'Администраторы модели',
      'parentIds': [
          'GROUP_EDO_GROUPS'
      ]
    };

    this.alfrescoJsApi.core.groupApi.addGroup(body).then(function (data) {
      expect(data.entry.displayName).to.be.equal('Администраторы модели');
      done();
    }, function () {
        });
  });

});
