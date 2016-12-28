import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItemName: String;

  constructor() { }

  ngOnInit() {
  }
    markSelectedItem(itemName: string) {
        itemName = itemName || '';
        this.selectedItemName = itemName;
    }
}
