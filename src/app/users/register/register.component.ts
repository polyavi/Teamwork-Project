import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
// import { contentHeaders } from '../common/headers';

import { UsersService } from './../../../core/services/users.service';

@Component({
    selector: 'app-signup',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.css' ],
    providers: [ UsersService ]
})
export class RegisterComponent {
  constructor(public router: Router, public http: Http) {
  }

  signup(event, username, password) {
    event.preventDefault();
  }
}
