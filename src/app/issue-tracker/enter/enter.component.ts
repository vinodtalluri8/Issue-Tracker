import { Component, OnInit } from '@angular/core';
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

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      { label: 'Enter'},
      { label: 'Issue Information' }];
  }

  ngOnInit() {
    this.preloadData();
  }

  preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
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

}
