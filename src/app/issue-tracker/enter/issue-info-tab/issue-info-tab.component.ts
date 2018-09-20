import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-issue-info-tab',
  templateUrl: './issue-info-tab.component.html',
  styleUrls: ['./issue-info-tab.component.css']
})
export class IssueInfoTabComponent implements OnInit {

  @Input() items: MenuItem[];
  constructor() {
   }

  ngOnInit() {
    console.log('adasdasd',this.items);
         
  }

}
