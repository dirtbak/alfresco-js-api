'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class GroupMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Groups() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/groups')
            .reply(200,
                {
                    'list': {
                        'pagination': {
                            'count': 11,
                            'hasMoreItems': false,
                            'totalItems': 11,
                            'skipCount': 0,
                            'maxItems': 100
                        },
                        'entries': [
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'ALFRESCO_ADMINISTRATORS',
                                    'id': 'GROUP_ALFRESCO_ADMINISTRATORS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'ALFRESCO_MODEL_ADMINISTRATORS',
                                    'id': 'GROUP_ALFRESCO_MODEL_ADMINISTRATORS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'ALFRESCO_SEARCH_ADMINISTRATORS',
                                    'id': 'GROUP_ALFRESCO_SEARCH_ADMINISTRATORS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'EDO_GROUPS',
                                    'id': 'GROUP_EDO_GROUPS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'EMAIL_CONTRIBUTORS',
                                    'id': 'GROUP_EMAIL_CONTRIBUTORS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'SITE_ADMINISTRATORS',
                                    'id': 'GROUP_SITE_ADMINISTRATORS'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': true,
                                    'displayName': 'site_swsdp',
                                    'id': 'GROUP_site_swsdp'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': false,
                                    'displayName': 'site_swsdp_SiteCollaborator',
                                    'id': 'GROUP_site_swsdp_SiteCollaborator'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': false,
                                    'displayName': 'site_swsdp_SiteConsumer',
                                    'id': 'GROUP_site_swsdp_SiteConsumer'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': false,
                                    'displayName': 'site_swsdp_SiteContributor',
                                    'id': 'GROUP_site_swsdp_SiteContributor'
                                }
                            },
                            {
                                'entry': {
                                    'isRoot': false,
                                    'displayName': 'site_swsdp_SiteManager',
                                    'id': 'GROUP_site_swsdp_SiteManager'
                                }
                            }
                        ]
                    }
                }
            );
    }


    get201CreationGroup() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/groups', {
                'id': 'GROUP_EDO_MODEL_ADMIN',
                'displayName': 'Администраторы модели',
                'parentIds': [
                    'GROUP_EDO_GROUPS'
                ]
            })
            .reply(201, {
                'entry': {
                    'isRoot': false,
                    'displayName': 'Администраторы модели',
                    'id': 'GROUP_EDO_MODEL_ADMIN'
                }
            });
    }
}

module.exports = GroupMock;
