/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var TaskMock = require('../test/mockObjects/mockAlfrescoApi').Task;
var expect = require('chai').expect;

describe('Tasks', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.taskMock = new TaskMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('Tasks 200', function (done) {
        this.taskMock.get200Response();

        this.alfrescoJsApi.core.tasksApi.getTasks().then(function (data) {
            expect(data.list.pagination.count).to.be.equal(2);
            expect(data.list.entries[0].entry.task.description).to.be.equal('One');
            expect(data.list.entries[1].entry.task.description).to.be.equal('Two');
            done();
        }, function () {
        });
    });

    it('Tasks 401', function (done) {
        this.taskMock.get401Response();

        this.alfrescoJsApi.core.tasksApi.getTasks().then(function () {
        }, function () {
            done();
        });
    });

});
