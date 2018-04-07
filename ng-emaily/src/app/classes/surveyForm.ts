export class SurveyForm {
    title: string;
    subject: string;
    emailBody: string;
    recipients: string;
    constructor(
        title: string,
        subject: string,
        emailBody: string,
        recipients: string) {
        this.title = title;
        this.subject = subject;
        this.emailBody = emailBody;
        this.recipients = recipients;
    }
}
