import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'short-info',
  templateUrl: './project-short-info.component.html',
  styleUrls: ['./project-short-info.component.css']
})
export class ProjectShortInfoComponent implements OnInit {
  selectedItemName: String;

  constructor() { }

  ngOnInit() {
  }
    markSelectedItem(itemName: string) {
        itemName = itemName || '';
        this.selectedItemName = itemName;
    }
}
