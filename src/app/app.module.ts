import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MockDataService } from "./services/mock-data.service";
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EnterComponent } from './enter/enter.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { IssueTrackerGroupsComponent } from './maintenance/issue-tracker-groups/issue-tracker-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EnterComponent,
    MaintenanceComponent,
    IssueTrackerGroupsComponent
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
    AccordionModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
