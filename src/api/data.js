import * as api from './api.js';
if (api.settings.debug) {
    api.settings.host = 'http://127.0.0.1:8000';
} else {
    api.settings.host = 'https://cooking-app-backend-vasil-loz.herokuapp.com';
}

export async function getRecipes() {
    return await api.get(api.settings.host + '/api/recipes');
}

export async function createRecipe(data) {
    return await api.post(api.settings.host + '/api/recipes/create', data);
}

export async function getRecipeById(id) {
    return await api.get(api.settings.host + '/api/recipes/' + id);
}

export async function editRecipe(id, data) {
    return await api.put(api.settings.host + '/api/recipes/edit/' + id, data);
}

export const register = api.register;
export const login = api.login;
export const logout = api.logout;