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

export function undefinedNullEmptyValidator(...args) {
    let valid = true;
    args.forEach((arg) => {
        if (arg === undefined || arg === null || arg.length === 0) {
            valid = false;
            return;
        }
    });

    return valid;
}

export function urlValidator(str) {
    const pattern = /http[s]*:\/\/.+\..+/;
    if (pattern.test(str) === false) {
        return 'You must enter a valid URL!';
    }
    return true;
}