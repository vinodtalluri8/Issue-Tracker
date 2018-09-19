import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-ppm-non-erc',
  templateUrl: './ppm-non-erc.component.html',
  styleUrls: ['./ppm-non-erc.component.css']
})
export class PpmNonErcComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  intErrorClassification;
  eligibleforTradeError;
  subCategory;
  security;
  tradeDate;
  noOrNa;
  clientNotified;
  navReviewed;
  settlementDate;
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
    if (!this.intErrorClassification || !this.eligibleforTradeError || !this.subCategory || !this.security || !this.tradeDate || !this.noOrNa || !this.clientNotified || !this.navReviewed || !this.settlementDate || !this.basicPointImpact || !this.dateReceivable ) {
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
                'subCategory': this.subCategory,
                'security': this.security,
                'tradeDate': this.tradeDate,
                'noOrNa': this.noOrNa,
                'clientNotified': this.clientNotified,
                'navReviewed': this.navReviewed,
                'settlementDate': this.settlementDate,
                'basicPointImpact': this.basicPointImpact,
                'dateReceivable': this.dateReceivable
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
        this.intErrorClassification = '';
        this.eligibleforTradeError = '';
        this.subCategory = '';
        this.security = '';
        this.tradeDate = '';
        this.noOrNa = '';
        this.clientNotified = '';
        this.navReviewed = '';
        this.settlementDate = '';
        this.basicPointImpact = '';
        this.dateReceivable = '';
  }

}
