import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-compilance-violation',
  templateUrl: './compilance-violation.component.html',
  styleUrls: ['./compilance-violation.component.css']
})
export class CompilanceViolationComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  intErrorClassification;
  eligibleforTradeAccount;
  dateReceivableRecorded;
  tradeDate;
  settlementDate;
  basicPointImpact;
  clientNotified;
  navReviewed;
  noOrNa;
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
    if (!this.intErrorClassification || !this.eligibleforTradeAccount || !this.dateReceivableRecorded || !this.tradeDate || !this.settlementDate || !this.basicPointImpact || !this.clientNotified || !this.navReviewed || !this.noOrNa ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
                'intErrorClassification': this.intErrorClassification,
                'eligibleforTradeAccount': this.eligibleforTradeAccount,
                'dateReceivableRecorded': this.dateReceivableRecorded,
                'tradeDate': this.tradeDate,
                'settlementDate': this.settlementDate,
                'basicPointImpact': this.basicPointImpact,
                'clientNotified': this.clientNotified,
                'navReviewed': this.navReviewed,
                'noOrNa': this.noOrNa
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
          this.intErrorClassification = '';
          this.eligibleforTradeAccount = '';
          this.dateReceivableRecorded = '';
          this.tradeDate = new Date();
          this.settlementDate = new Date();
          this.basicPointImpact = '';
          this.clientNotified = '';
          this.navReviewed = '';
          this.noOrNa = '';
  }

}
