import { Component } from '@angular/core';
import { User } from './classes/user';
import { AuthService } from './services/auth.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
    ],
    providers: [AuthService]
})
export class AppComponent {
    private title: string = 'emaily';
    private auth: User = {};
    private isLogged: boolean = false;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {
        this.authService.fetchUser().then((userData) => {
          this.auth = userData;
          this.isLogged = !!this.auth.googleID;
        })
    }
}
