export const settings = {
    host: 'https://cooking-app-backend-vasil-loz.herokuapp.com'
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response;
            throw new Error(error.statusText)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

function setOptions(method = 'get', body) {
    const options = { method, headers: { 'Content-Type': 'application/json' } };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, setOptions());
}

export async function register(data) {
    return await request(`${settings.host}/api/token-auth/register/`, setOptions('post', data));
}