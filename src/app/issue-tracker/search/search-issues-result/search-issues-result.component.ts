import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-search-issues-result',
  templateUrl: './search-issues-result.component.html',
  styleUrls: ['./search-issues-result.component.css']
})
export class SearchIssuesResultComponent implements OnInit {

  sales;
  isPaginator;
  filterable;
  exportFileName;
  selectedRows;
  loading;
  displayRows;
  colHeaders;
  itemsPath: MenuItem[];
  home: MenuItem;
  mockDropDownData;
  selectedProgram;
  selectedFilter;

  constructor() {
     this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'Checklists Scheduled';
    this.selectedRows = 15;
    this.loading = false;
    this.home = { icon: 'fa fa-home' };

    this.itemsPath = [
      { label: 'Search'},
      { label: 'Search Issues Result' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Description'},
      { field: 'description', header: 'Preventive Action Mitigation Control'},
      { field: 'dailyTradeReconFlag', header: 'Incident Date'},
      { field: 'tradeReconFlag', header: 'Reported Date'},
      { field: 'monthlyRollFwdFlag', header: 'Owner'},
      { field: 'dailyTradeReconFlag', header: 'Preparer'},
      { field: 'tradeReconFlag', header: 'Category'},
      { field: 'monthlyRollFwdFlag', header: 'Dept/Gr'},
      { field: 'dailyTradeReconFlag', header: 'Status'},
      { field: 'tradeReconFlag', header: 'ERC Issue'},
      { field: 'monthlyRollFwdFlag', header: 'Portfolio Account Type'},
      { field: 'dailyTradeReconFlag', header: 'Gain Loss'},
      { field: 'tradeReconFlag', header: 'US Dollar'},
      { field: 'monthlyRollFwdFlag', header: 'Action'},
    ];
  }

  ngOnInit() {
    this.selectedFilter = 'Active Only';
    this.sales = [
      {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''}
           ];

  }

      checkAndEnablePage(value: number) {
    if (this.sales.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
    // console.log(' mesagepage ', this.msgs);
  }

}
