import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-issue-tracker-groups',
  templateUrl: './issue-tracker-groups.component.html',
  styleUrls: ['./issue-tracker-groups.component.css']
})
export class IssueTrackerGroupsComponent implements OnInit {

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
      { label: 'Maintenance'},
      { label: 'Issue Tracker Groups' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Group'},
      { field: 'description', header: 'Department'},
      { field: 'dailyTradeReconFlag', header: 'Acti'},
      { field: 'tradeReconFlag', header: 'EmailList'},
      { field: 'monthlyRollFwdFlag', header: 'Edit'}
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
