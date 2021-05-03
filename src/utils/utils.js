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