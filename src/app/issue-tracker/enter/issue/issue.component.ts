import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { MockDataService } from "../../services/mock-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  resolutionDate;
  description;
  controlSuggestion;
  resolution;
  actionComplete;
  notes;
  issuerelatetocontrol;
  automateOpportunity;
  enhancement;
  dataJson;

  constructor(private mockService: MockDataService, private router: Router) {
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
    if (!this.resolutionDate || !this.description || !this.controlSuggestion || !this.resolution || !this.actionComplete || !this.notes || !this.issuerelatetocontrol || !this.automateOpportunity || !this.enhancement ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
              'resolutionDate': this.resolutionDate,
              'description': this.description,
              'controlSuggestion': this.controlSuggestion,
              'resolution': this.resolution,
              'actionComplete': this.actionComplete,
              'notes': this.notes,
              'issuerelatetocontrol': this.issuerelatetocontrol,
              'automateOpportunity': this.automateOpportunity,
              'enhancement': this.enhancement
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
        this.resolutionDate = new Date();
        this.description = '';
        this.controlSuggestion = '';
        this.resolution = '';
        this.actionComplete = '';
        this.notes = '';
        this.issuerelatetocontrol = '';
        this.automateOpportunity = '';
        this.enhancement = '';
  }

}
