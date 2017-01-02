import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../core/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    selectedItemName: String;

    constructor(
        public usersService: UsersService,
        public router: Router
    ) { }

    ngOnInit() {

    }

    markSelectedItem(itemName: string) {
        itemName = itemName || '';
       this.selectedItemName = itemName;
    }

    logout() {
        this.usersService.logoutUser();
        this.router.navigate(['/']);
    }
}
