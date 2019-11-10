/**
 *  Represents the API endpoint configuration to render an API explorer component.
 *  @author - Shreya Shah
 */
export const configData =
    [{
        title: 'Add new user',
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: [
            {
                name: 'email',
                type: 'email',
                max: 24,
                min: 3,
            },
            {
                name: 'full-name',
                type: 'text',
                placeholder: 'John Doe',
                required: true,
            },
            {
                name: 'phone',
                type: 'tel',
                pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
            },
        ]
    }, {
        title: 'Get Posts',
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    }, {
        title: 'Update Posts',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        body: [
            {
                name: 'id',
                type: 'number',
                required: true
            }, {
                name: 'title',
                type: 'text'
            }, {
                name: 'body',
                type: 'text'
            }, {
                name: 'userId',
                type: 'number',
                required: true
            }
        ]
    }, {
        title: 'Delete Posts',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'DELETE',
    }, {
        title: 'Create Post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        body: [
            {
                name: 'title',
                type: 'text',
            },
            {
                name: 'body',
                type: 'text'
            }, {
                name: 'userId',
                type: 'number',
                required: true
            }
        ]
    }];