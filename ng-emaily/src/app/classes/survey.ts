import { Recipient } from 'recipient';
import { User } from 'user';

export class Survey {
    title: string;
    body: string;
    subject: string;
    recipients: Recipient[] = [];
    yes: number = 0;
    no: number = 0;
    dateSent: date;
    lastReplied: date;
    user: User;
}
