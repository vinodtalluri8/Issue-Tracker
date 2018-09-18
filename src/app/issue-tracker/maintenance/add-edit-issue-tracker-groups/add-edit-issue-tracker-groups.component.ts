import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ActivatedRoute } from "@angular/router";
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-add-edit-issue-tracker-groups',
  templateUrl: './add-edit-issue-tracker-groups.component.html',
  styleUrls: ['./add-edit-issue-tracker-groups.component.css']
})
export class AddEditIssueTrackerGroupsComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  isEdit;
  groupName;
  departmentId;
  flagActive;
  emailLists;
  mockDropDownData;
  mockMultiDropDownData;
  dataJson;

  constructor(private mockService: MockDataService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['formtype'] == "edit") {
        this.isEdit = true;
        this.itemsPath = [
      { label: 'Maintenance' },
      { label: 'Issue Tracker Groups' },
      { label: 'Modify Issue Tracker Groups' }];
      } else {
        this.isEdit = false;
        this.itemsPath = [
      { label: 'Maintenance' },
      { label: 'Issue Tracker Groups' },
      { label: 'Add Issue Tracker Groups' }];
      }
    })
    
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
    if (!this.groupName || !this.departmentId || !this.flagActive || !this.emailLists ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
          'groupName': this.groupName,
          'departmentId': this.departmentId,
          'flagActive': this.flagActive,
          'emailLists': this.emailLists
      };
    }
    console.log('dataJson', this.dataJson);
  }


  resetAll() {
          this.groupName = '';
          this.departmentId = '';
          this.flagActive = '';
          this.emailLists = '';
  }

}
