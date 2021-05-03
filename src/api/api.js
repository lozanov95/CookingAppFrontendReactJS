export const settings = {
    host: 'https://cooking-app-backend-vasil-loz.herokuapp.com',
    debug: true
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json();

            throw new Error(JSON.stringify({ error }))
        }
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

function setOptions(method = 'get', body) {
    const options = { method, headers: { 'Content-Type': 'application/json' } };

    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
        options.headers['Authorization'] = 'Token ' + authToken;
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, setOptions());
}

export async function post(url, data) {
    return await request(url, setOptions('post', data));
}
export async function register(data) {
    return await post(`${settings.host}/api/token-auth/register/`, data);
}

export async function login(data) {
    const { token, user_id } = await post(`${settings.host}/api/token-auth/login/`, data);
    sessionStorage.authToken = token;
    sessionStorage.userId = user_id;
    return token;
}

export async function logout() {
    const response = await get(`${settings.host}/api/token-auth/logout/`);
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    return response;
}