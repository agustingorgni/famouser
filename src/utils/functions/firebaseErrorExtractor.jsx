export const firebaseErrorExtractor = (error) => {
    if (!error) {
        return null;
    }
    const errorMessage = String(error);
    const sanitizedString = errorMessage.replace(/-/g, ' ');
    // The error message has the format (auth/this-is-the-error)
    return sanitizedString.split('auth/')[1].split(')')[0];
};
