import * as api from './api.js';
if (api.settings.debug) {
    api.settings.host = 'http://127.0.0.1:8000';
} else {
    api.settings.host = 'https://cooking-app-backend-vasil-loz.herokuapp.com';
}

export async function getRecipes() {
    return await api.get(api.settings.host + '/api/recipes');
}

export const register = api.register;
export const login = api.login;
export const logout = api.logout;