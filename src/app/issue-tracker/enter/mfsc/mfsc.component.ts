import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-mfsc',
  templateUrl: './mfsc.component.html',
  styleUrls: ['./mfsc.component.css']
})
export class MfscComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  intErrorClassification;
  eligibleforTradeError;
  rootCause;
  tradeDate;
  settlementDate;
  noOrNa;
  clientNotified;
  navReviewed;
  basicPointImpact;
  dateReceivable;
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
    if (!this.intErrorClassification || !this.eligibleforTradeError || !this.rootCause || !this.tradeDate || !this.settlementDate || !this.noOrNa || !this.clientNotified || !this.navReviewed || !this.basicPointImpact || !this.dateReceivable) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
              'intErrorClassification': this.intErrorClassification,
              'eligibleforTradeError': this.eligibleforTradeError,
              'rootCause': this.rootCause,
              'tradeDate': this.tradeDate,
              'settlementDate': this.settlementDate,
              'noOrNa': this.noOrNa,
              'clientNotified': this.clientNotified,
              'navReviewed': this.navReviewed,
              'basicPointImpact': this.basicPointImpact,
              'dateReceivable': this.dateReceivable
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
          this.intErrorClassification = '';
          this.eligibleforTradeError = '';
          this.rootCause = '';
          this.tradeDate = new Date();
          this.settlementDate = new Date();
          this.noOrNa = '';
          this.clientNotified = '';
          this.navReviewed = '';
          this.basicPointImpact = '';
          this.dateReceivable = new Date();
  }

}
