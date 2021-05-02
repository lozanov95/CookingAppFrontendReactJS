import * as api from './api.js';
api.settings.host = 'https://cooking-app-backend-vasil-loz.herokuapp.com'

export async function getRecipes() {
    return await api.get(api.settings.host + '/api/recipes');
}

export const register = api.register;
export const login = api.login;