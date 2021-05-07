import * as api from './api.js';

api.settings.host = process.env.REACT_APP_BACKEND_URL || 'https://cooking-app-backend-vasil-loz.herokuapp.com';


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

export async function deleteRecipe(id) {
    return await api.del(api.settings.host + '/api/recipes/delete/' + id);
}

export async function getRecipesForCurrentUser() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(api.settings.host + '/api/recipes?creator_id=' + userId);
}

export async function addComment(recipeId, content) {
    return await api.post(api.settings.host + '/api/recipes/' + recipeId + '/comments/create', content)
}

export async function getComments(recipeId) {
    return await api.get(api.settings.host + '/api/recipes/' + recipeId + '/comments');
}

export async function searchRecipe(searchString) {
    return await api.get(api.settings.host + '/api/recipes?search=' + searchString);
}

export const register = api.register;
export const login = api.login;
export const logout = api.logout;