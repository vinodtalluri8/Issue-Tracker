import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-issue-info-tab',
  templateUrl: './issue-info-tab.component.html',
  styleUrls: ['./issue-info-tab.component.css']
})
export class IssueInfoTabComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
          this.items = [
          {label: 'Issue', routerLink: 'issue'},
          {label: 'Portfolio/Account', routerLink: 'portfolio'},
          {label: 'MFSC', routerLink: 'mfsc'},
          {label: 'Attachments', routerLink: 'attachments'},
          {label: 'Compliance Violation', routerLink: 'compilanceviolation'},
          {label: 'PPM Non-ERC', routerLink: 'ppmnonerc'},
          {label: 'Nav Error', routerLink: 'naverror'},
          {label: 'Trade Error', routerLink: 'tradeerror'}
      ];
  }

}
