import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'date-display',
    templateUrl: './date-display.component.html',
    styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {
    @Input() private dateDisplay: string;
    @Input() private displayLabel: string;
    constructor() { }

    ngOnInit() {
    }

    getDateText() {
      const dateDisplay = moment(this.dateDisplay).format('MMMM DD YYYY, h:mm:ss a')
        return `${this.displayLabel}: ${dateDisplay}`;
    }
}
