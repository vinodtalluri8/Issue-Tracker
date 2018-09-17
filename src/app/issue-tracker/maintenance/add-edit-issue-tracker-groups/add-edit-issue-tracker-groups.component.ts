import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-edit-issue-tracker-groups',
  templateUrl: './add-edit-issue-tracker-groups.component.html',
  styleUrls: ['./add-edit-issue-tracker-groups.component.css']
})
export class AddEditIssueTrackerGroupsComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  isEdit;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => { 
      console.log('params......',params['formtype']);
        if(params['formtype'] == "edit"){
          this.isEdit = true;
        }else{
          this.isEdit = false;
        }
    });
    this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Issue Tracker Groups' },
      { label: 'Add Issue Tracker Groups'}];
   }

  ngOnInit() {
  }

}
