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
  selectedJobName;
  priority;
  status;
  selectedSource;
  selectedBusinessDl;
  classification;
  selectedTechnicalDl;
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
    if (!this.selectedJobName || !this.priority || !this.status || !this.selectedSource || !this.selectedBusinessDl || !this.classification) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'selectedJobName' : this.selectedJobName,
        'priority' : this.priority,
        'status' : this.status,
        'selectedSource' : this.selectedSource,
        'selectedBusinessDl' : this.selectedBusinessDl,
        'classification' : this.classification,
        'technicalDl' : this.selectedTechnicalDl
      };
    }

    console.log('dataJson', this.dataJson);
    this.router.navigate(['searchissueresult']);
  }


  resetAll() {
  this.selectedJobName = '';
  this.priority = '';
  this.status = '';
  this.selectedSource = '';
  this.selectedBusinessDl = '';
  this.classification = '';
  this.selectedTechnicalDl = '';
  }

  toResultPage(){
    this.router.navigate(['/searchissueresult']);
  }
}
