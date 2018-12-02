/**
 * Mock data (from CraftQL query), to test composer component.
 */
export default {
    page: {
        type: 'page',
        name: 'contact',
        id: 12,
        data: {
            title: 'Contact'
        },
        childComponents: [
            {
                type: 'header',
                id: 39,
                data: {
                    'title': 'Hello World',
                    'lead': 'Welcome to Number Nine.'
                },
                childComponents: null,
                meta: {
                    lastEdited: '',
                    dateCreated: '',
                    active: true
                }
            },
            {
                type: 'card',
                id: 3,
                data: {
                    'title': 'Card 1',
                    'items': [
                        'One',
                        'Two',
                        'Three'
                    ]
                },
                childComponents: null,
                meta: {
                    lastEdited: '',
                    dateCreated: '',
                    active: true
                }
            },
            {
                type: '',
                id: 18,
                data: {
                    'title': 'Card 2',
                    'items': [
                        'Bag',
                        'Plant',
                        'Stone'
                    ]
                },
                childComponents: null,
                meta: {
                    lastEdited: '',
                    dateCreated: '',
                    active: true
                }
            },
            {
                type: '',
                id: 19,
                data: {
                    'title': 'Card 3',
                    'items': [
                        'Get',
                        'Some',
                        'Free'
                    ]
                },
                childComponents: null,
                meta: {
                    lastEdited: '',
                    dateCreated: '',
                    active: true
                }
            }
        ]
    },
    meta: {
        lastEdited: '',
        dateCreated: '',
        active: true,
        SEO: {
            title: 'Contact',
            description: 'De contact pagina van KHN'
        }
    }
}
