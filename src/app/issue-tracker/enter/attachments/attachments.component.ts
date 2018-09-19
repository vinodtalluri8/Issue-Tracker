import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  newattachments;
  description;
  dataJson;

  constructor(private mockService: MockDataService) {
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
    if (!this.newattachments || !this.description) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
                'newattachments': this.newattachments,
                'description': this.description
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
          this.newattachments = '';
          this.description = '';
  }

}
