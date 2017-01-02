import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleNotificationsComponent } from 'angular2-notifications';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public usersService:UsersService,
    public router:Router
  ){

  }
  public notification_options = {
    timeOut: 3000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  }

  notificationOnCreate(event) {
    // console.log(event);
  }

  notificationOnDestroy(event) {
    // console.log(event);
  }
}
