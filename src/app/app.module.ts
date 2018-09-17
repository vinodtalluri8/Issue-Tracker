import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { MockDataService } from "./issue-tracker/services/mock-data.service";
import { SearchComponent } from "./issue-tracker/search/search.component";
import { EnterComponent } from "./issue-tracker/enter/enter.component";
import { MaintenanceComponent } from "./issue-tracker/maintenance/maintenance.component";
import { IssueTrackerGroupsComponent } from "./issue-tracker/maintenance/issue-tracker-groups/issue-tracker-groups.component";
import { IssueInfoTabComponent } from './issue-tracker/enter/issue-info-tab/issue-info-tab.component';
import { IssueComponent } from './issue-tracker/enter/issue/issue.component';
import { PortfolioComponent } from './issue-tracker/enter/portfolio/portfolio.component';
import { MfscComponent } from './issue-tracker/enter/mfsc/mfsc.component';
import { AttachmentsComponent } from './issue-tracker/enter/attachments/attachments.component';
import { SearchIssuesResultComponent } from './issue-tracker/search/search-issues-result/search-issues-result.component';
import { AddEditIssueTrackerGroupsComponent } from './issue-tracker/maintenance/add-edit-issue-tracker-groups/add-edit-issue-tracker-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EnterComponent,
    MaintenanceComponent,
    IssueTrackerGroupsComponent,
    IssueInfoTabComponent,
    IssueComponent,
    PortfolioComponent,
    MfscComponent,
    AttachmentsComponent,
    SearchIssuesResultComponent,
    AddEditIssueTrackerGroupsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    AngularFontAwesomeModule,
    SharedModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    TableModule,
    AccordionModule,
    TabMenuModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
