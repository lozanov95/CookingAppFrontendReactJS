export function parseErrorsToArray(err) {
    const parsed_error = JSON.parse(err.message).error;
    const errors = [];
    Object.keys(parsed_error).forEach((key) => { errors.push(`${key.toUpperCase()}: ${parsed_error[key]}`) });
    return errors;
}