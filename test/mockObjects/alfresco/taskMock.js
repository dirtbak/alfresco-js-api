'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class TaskMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/workflow/versions/1/tasks')
            .reply(200, {
                'list': {
                    "pagination": {
                        "count": 2,
                        "hasMoreItems": false,
                        "totalItems": 2,
                        "skipCount": 0,
                        "maxItems": 100
                    },
                    "entries": [
                        {
                            "entry": {
                                "dueAt": "2017-07-31T18:00:00.000+0000",
                                "processDefinitionId": "activitiAdhoc:1:4",
                                "processId": "1031",
                                "name": "Adhoc Task",
                                "description": "One",
                                "startedAt": "2017-08-31T08:10:18.942+0000",
                                "id": "1077",
                                "assignee": "admin",
                                "state": "claimed",
                                "activityDefinitionId": "adhocTask",
                                "priority": 3,
                                "formResourceKey": "wf:adhocTask"
                            }
                        },
                        {
                            "entry": {
                                "processDefinitionId": "activitiAdhoc:1:4",
                                "processId": "765",
                                "name": "Adhoc Task",
                                "description": "Two",
                                "startedAt": "2017-08-16T06:06:17.564+0000",
                                "id": "811",
                                "assignee": "admin",
                                "state": "claimed",
                                "activityDefinitionId": "adhocTask",
                                "priority": 2,
                                "formResourceKey": "wf:adhocTask"
                            }
                        }
                    ]
                }
            });

    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/workflow/versions/1/tasks')
            .reply(401, {
                'error': {
                    "errorKey": "framework.exception.ApiDefault",
                    "statusCode": 401,
                    "briefSummary": "08110069 Authentication failed for Web Script org/alfresco/api/ResourceWebScript.get",
                    "stackTrace": "For security reasons the stack trace is no longer displayed, but the property is kept for previous versions",
                    "descriptionURL": "https://api-explorer.alfresco.com"
                }
            });
    }
}

module.exports = TaskMock;
