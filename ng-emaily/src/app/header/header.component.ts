import { Component, OnInit } from '@angular/core';
import { User } from './../classes/user';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  private title: string = 'emaily';
  private auth: User;
  private isLogged: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.fetchUser().then((userData) => {
      this.auth = userData;
      this.isLogged = !!this.auth.googleID;
    })
  }

}
