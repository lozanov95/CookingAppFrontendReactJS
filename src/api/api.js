import { clearUserSession, handleInvalidToken } from '../utils/utils.js';

export const settings = {
    host: 'https://cooking-app-backend-vasil-loz.herokuapp.com',
    debug: false
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type');
        if (response.ok === false) {
            if (contentType === 'application/json') {
                const error = await response.json();
                throw new Error(JSON.stringify({ error }))
            } else {
                throw new Error(response.statusText)
            }
        } else {
            if (contentType === 'application/json') {
                const data = await response.json();
                return data;
            } else {
                return response;
            }
        }
    } catch (error) {
        handleInvalidToken(error);
        throw new Error(error.message);
    }
}

function setOptions(method = 'get', body) {
    const options = { method, headers: {} };

    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
        options.headers['Authorization'] = 'Token ' + authToken;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
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

export async function put(url, data) {
    return await request(url, setOptions('put', data));
}

export async function del(url) {
    return await request(url, setOptions('delete'));
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
    clearUserSession();
    return response;
}