import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "primeng/api";
import { MockDataService } from "../services/mock-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  incidentDate;
  dateReported;
  department;
  owner;
  category;
  status;
  ercIssue;
  dataJson;
  itemsPath: MenuItem[];
  sampleDropDown;
  selectedValue=[
          {label: 'Issue', routerLink: 'issue'},
          {label: 'Portfolio/Account', routerLink: 'portfolio'},
          // {label: 'MFSC', routerLink: 'mfsc'},
          {label: 'Attachments', routerLink: 'attachments'},
          // {label: 'Compliance Violation', routerLink: 'compilanceviolation'},
          // {label: 'PPM Non-ERC', routerLink: 'ppmnonerc'},
          // {label: 'Nav Error', routerLink: 'naverror'},
          // {label: 'Trade Error', routerLink: 'tradeerror'}
      ];

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      { label: 'Enter'},
      { label: 'Issue Information' }];
  }

  ngOnInit() {
    this.sampleDropDown = [
   {  
      "label":"Controls Without a Procedure",
      "value":{  
         "id":1,
         "name":"Controls Without a Procedure",
         "code":"NY"
      }
   },
   {  
      "label":"Evaluation Report",
      "value":{  
         "id":2,
         "name":"Evaluation Report",
         "code":"RM"
      }
   },
   {  
      "label":"Procedure Checklists",
      "value":{  
         "id":3,
         "name":"Procedure Checklists",
         "code":"LDN"
      }
   },
   {  
      "label":"Procedures withoyut a Checklist",
      "value":{  
         "id":4,
         "name":"Procedures withoyut a Checklist",
         "code":"IST"
      }
   },
   {  
      "label":"Yearly Summary",
      "value":{  
         "id":5,
         "name":"Yearly Summary",
         "code":"PRS"
      }
   },
    {  
      "label":"Issue",
      "value":{  
         "id":5,
         "name":"Issue",
         "code":"PRS"
      }
   },
    {  
      "label":"Portfolio/Account",
      "value":{  
         "id":5,
         "name":"Portfolio/Account",
         "code":"PRS"
      }
   },
    {  
      "label":"MFSC",
      "value":{  
         "id":5,
         "name":"MFSC",
         "code":"PRS"
      }
   },
    {  
      "label":"Attachments",
      "value":{  
         "id":5,
         "name":"Attachments",
         "code":"PRS"
      }
   },
    {  
      "label":"Compilance Violation",
      "value":{  
         "id":5,
         "name":"Compilance Violation",
         "code":"PRS"
      }
   },
    {  
      "label":"PPM Non-ERC",
      "value":{  
         "id":5,
         "name":"PPM Non-ERC",
         "code":"PRS"
      }
   },
    {  
      "label":"Nav Error",
      "value":{  
         "id":5,
         "name":"Nav Error",
         "code":"PRS"
      }
   },
    {  
      "label":"Trade Error",
      "value":{  
         "id":5,
         "name":"Trade Error",
         "code":"PRS"
      }
   }
]
    this.preloadData();
  }

  preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
        console.log('mock data......',data)
      }
    );
    this.mockService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

  disable() {
    if (!this.incidentDate || !this.dateReported || !this.department || !this.owner || !this.category || !this.status || !this.ercIssue ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
            'incidentDate': this.incidentDate,
            'dateReported': this.dateReported,
            'department': this.department,
            'owner': this.owner,
            'category': this.category,
            'status': this.status,
            'ercIssue': this.ercIssue
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
        this.incidentDate = new Date();
        this.dateReported = new Date();
        this.department = '';
        this.owner = '';
        this.category = '';
        this.status = '';
        this.ercIssue = '';
  }

  changeCat(event){
    this.selectedValue = [
          {label: 'Issue', routerLink: 'issue'},
          {label: 'Portfolio/Account', routerLink: 'portfolio'},
          {label: 'Attachments', routerLink: 'attachments'}
      ];
      if(event.name == "MFSC"){
        this.selectedValue.push({label: 'MFSC', routerLink: 'mfsc'});
      }else if(event.name == "Compilance Violation"){
        this.selectedValue.push({label: 'Compliance Violation', routerLink: 'compilanceviolation'});
      }else if(event.name == "PPM Non-ERC"){
        this.selectedValue.push({label: 'PPM Non-ERC', routerLink: 'ppmnonerc'});
      }else if(event.name == "Nav Error"){
        this.selectedValue.push({label: 'Nav Error', routerLink: 'naverror'});
      }else if(event.name == "Trade Error"){
        this.selectedValue.push({label: 'Trade Error', routerLink: 'tradeerror'})
      }else ;
  }

  // selectedValue=[
  //         {label: 'Issue', routerLink: 'issue'},
  //         {label: 'Portfolio/Account', routerLink: 'portfolio'},
  //         {label: 'MFSC', routerLink: 'mfsc'},
  //         {label: 'Attachments', routerLink: 'attachments'},
  //         {label: 'Compliance Violation', routerLink: 'compilanceviolation'},
  //         {label: 'PPM Non-ERC', routerLink: 'ppmnonerc'},
  //         {label: 'Nav Error', routerLink: 'naverror'},
  //         {label: 'Trade Error', routerLink: 'tradeerror'}
  //     ];

}
