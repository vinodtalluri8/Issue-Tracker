import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-trade-error',
  templateUrl: './trade-error.component.html',
  styleUrls: ['./trade-error.component.css']
})
export class TradeErrorComponent implements OnInit {

 mockDropDownData;
  mockMultiDropDownData;
  eligibleforTradeError;
  subCategory;
  notes;
  resolutionDate;
  actionComplete;
  enhancement;
  issuerelatetocontrol;
  fromUsDollar;
  intErrorClassification;
  tradeDate;
  clientNotified;
  periodImpacted;
  navReviewed;
  basicPointImpact;
  dateReceivable;
  duringPeriod;
  noOrNa;
  reprocessingPerformed;
  amountReimbursed;
  shareholdersReimbursed;
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
    if (!this.intErrorClassification || !this.periodImpacted || !this.duringPeriod || !this.reprocessingPerformed || !this.tradeDate || !this.noOrNa || !this.clientNotified || !this.navReviewed || !this.amountReimbursed || !this.basicPointImpact || !this.dateReceivable || !this.shareholdersReimbursed) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
                  'intErrorClassification': this.intErrorClassification,
                  'tradeDate': this.tradeDate,
                  'clientNotified': this.clientNotified,
                  'periodImpacted': this.periodImpacted,
                  'navReviewed': this.navReviewed,
                  'basicPointImpact': this.basicPointImpact,
                  'dateReceivable': this.dateReceivable,
                  'duringPeriod': this.duringPeriod,
                  'noOrNa': this.noOrNa,
                  'reprocessingPerformed': this.reprocessingPerformed,
                  'amountReimbursed': this.amountReimbursed,
                  'shareholdersReimbursed': this.shareholdersReimbursed
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
        this.intErrorClassification = '';
        this.tradeDate = new Date();
        this.clientNotified = '';
        this.periodImpacted = '';
        this.navReviewed = '';
        this.basicPointImpact = '';
        this.dateReceivable = new Date();
        this.duringPeriod = '';
        this.noOrNa = '';
        this.reprocessingPerformed = '';
        this.amountReimbursed = '';
        this.shareholdersReimbursed = '';
  }

}
