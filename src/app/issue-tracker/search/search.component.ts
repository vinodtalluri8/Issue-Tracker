import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../services/mock-data.service";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  owner;
  preparer;
  category;
  description;
  department;
  fromIncidentDate;
  fromDateReported;
  fromUsDollar;
  status;
  toIncidentDate;
  toDateReported;
  toUsDollar;
  gainLoss;
  ercIssue;
  issueRelatesToControl;
  portfolio;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      {  label: 'Search'}
      ];
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
    if (!this.owner || !this.preparer || !this.category || !this.description || !this.department || !this.fromIncidentDate || !this.fromDateReported || !this.fromUsDollar || !this.status || !this.toIncidentDate || !this.toDateReported || !this.toUsDollar || !this.gainLoss || !this.ercIssue || !this.issueRelatesToControl || !this.portfolio) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
          'owner': this.owner,
          'preparer': this.preparer,
          'category': this.category,
          'description': this.description,
          'department': this.department,
          'fromIncidentDate': this.fromIncidentDate,
          'fromDateReported': this.fromDateReported,
          'fromUsDollar': this.fromUsDollar,
          'status': this.status,
          'toIncidentDate': this.toIncidentDate,
          'toDateReported': this.toDateReported,
          'toUsDollar': this.toUsDollar,
          'gainLoss': this.gainLoss,
          'ercIssue': this.ercIssue,
          'issueRelatesToControl': this.issueRelatesToControl,
          'portfolio': this.portfolio
      };
    }

    console.log('dataJson', this.dataJson);
    this.router.navigate(['searchissueresult']);
  }


  resetAll() {
          this.owner = '';
          this.preparer = '';
          this.category = '';
          this.description = '';
          this.department = '';
          this.fromIncidentDate = new Date();
          this.fromDateReported = new Date();
          this.fromUsDollar = '';
          this.status = '';
          this.toIncidentDate = new Date();
          this.toDateReported = new Date();
          this.toUsDollar = '';
          this.gainLoss = '';
          this.ercIssue = '';
          this.issueRelatesToControl = '';
          this.portfolio = '';
  }

  toResultPage(){
    this.router.navigate(['/searchissueresult']);
  }
}
