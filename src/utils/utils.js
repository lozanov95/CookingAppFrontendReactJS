export function parseErrorsToArray(str) {
    try {
        const parsed_error = JSON.parse(str.message).error;
        const errors = [];
        Object.keys(parsed_error).forEach((key) => { errors.push(`${key.toUpperCase()}: ${parsed_error[key]}`) });
        return errors;
    } catch (error) {
        return [str.message];
    }
}

export function clearUserSession() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
}

export function handleInvalidToken(error) {
    try {
        const parsedErrorMessage = JSON.parse(error.message)
        if (parsedErrorMessage.error.detail === 'Invalid token.') {
            clearUserSession();
            window.alert('Your session has expired!');
            window.location = '/';
        }
    } catch (error) { }
}