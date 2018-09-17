import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;

  constructor() {
    this.itemsPath = [
      { label: 'Enter'},
      { label: 'Issue Information' }];
   }

  ngOnInit() {
  }

}
