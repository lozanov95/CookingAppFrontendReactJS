export function emailValidator(str) {
    const pattern = /.+@.+\..+/;
    if (pattern.test(str) === false) {
        return 'You must enter a valid email address!';
    }
    return true;
}

export function passwordValidator(str) {
    if (str.length < 8) {
        return 'The password must be at least 8 characters long!';
    }
    return true;
}