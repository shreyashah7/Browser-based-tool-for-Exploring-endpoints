const headers = {
    'Accept': 'application/json'
};

export const callBodyMethod = (restData) =>
    fetch(`${restData.url}`, {
        method: restData.method,
        headers: {
            ...headers,
            ...restData.headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(restData.body)
    }).then(res => {
        return res.json();
    }).catch(error => {
        return error;
    });

export const callWithoutBodyMethod = (restData) =>
    fetch(`${restData.url}`, {
        method: restData.method,
        headers: {
            ...restData.headers,
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        return error;
    });

