import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  impactMfsPortfolio;
  portfolio;
  affectedPortfolio;
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
    if (!this.impactMfsPortfolio || !this.portfolio || !this.affectedPortfolio) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
                'impactMfsPortfolio': this.impactMfsPortfolio,
                'portfolio': this.portfolio,
                'affectedPortfolio': this.affectedPortfolio
      };
    }

    console.log('dataJson', this.dataJson);
  }


  resetAll() {
          this.impactMfsPortfolio = '';
          this.portfolio = '';
          this.affectedPortfolio = [];
  }

}
