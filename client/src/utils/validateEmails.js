//email separated by commas
export default (emails = '') => {
    const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const invalidEmails = emails.split(',')
        .filter(email => !!email)
        .map(email => email.trim())
        .filter((email='') => {
            return !email.match(VALID_EMAIL_REGEX);
        });
    return invalidEmails;
}
