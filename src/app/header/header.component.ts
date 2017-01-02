import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../core/services/users.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItemName: String;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }
  markSelectedItem(itemName: string) {
    itemName = itemName || '';
    this.selectedItemName = itemName;
  }
}
