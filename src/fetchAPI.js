function authorizationHeader(method) {
    return {
        method: method,
        headers: {
            accept: 'text/plain',
            // mode: 'no-cors'
        }
    };
}

const handleFetchAPI = (url, method) => {
    return fetch(url, authorizationHeader(method))
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else
                return { status: response.status, message: response.statusText }
        })
        .then(json => {
            console.log("IT'S OK! " + JSON.stringify(json, null, 2));
        })
        .catch(err => {
            console.log('ERROR: ' + err.toString());
        })
}

const getUserSettings = 'http://localhost:65100/api/v1/User/GetUserSettings';
const getCourseCatalog = 'https://ocelot.local.dev/api/CourseCatalog/Get';

handleFetchAPI(getCourseCatalog, 'GET');