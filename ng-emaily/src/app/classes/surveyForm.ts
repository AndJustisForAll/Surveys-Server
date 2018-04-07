export class SurveyForm {
    private title: string,
    private subject: string,
    private emailBody: string,
    private recipients: string
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
