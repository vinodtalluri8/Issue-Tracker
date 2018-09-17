import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./issue-tracker/search/search.component";
import { EnterComponent } from "./issue-tracker/enter/enter.component";
import { IssueTrackerGroupsComponent } from "./issue-tracker/maintenance/issue-tracker-groups/issue-tracker-groups.component";
import { IssueComponent } from "./issue-tracker/enter/issue/issue.component";
import { PortfolioComponent } from "./issue-tracker/enter/portfolio/portfolio.component";
import { MfscComponent } from "./issue-tracker/enter/mfsc/mfsc.component";
import { AttachmentsComponent } from "./issue-tracker/enter/attachments/attachments.component";
import { SearchIssuesResultComponent } from "./issue-tracker/search/search-issues-result/search-issues-result.component";
import { AddEditIssueTrackerGroupsComponent } from "./issue-tracker/maintenance/add-edit-issue-tracker-groups/add-edit-issue-tracker-groups.component";

const routes: Routes = [
  { path:'search', component: SearchComponent},
  { path:'enter', component: EnterComponent, 
  children:[
    { path: '', redirectTo: 'issue', pathMatch: 'full' },
    {path:'issue', component: IssueComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'mfsc', component: MfscComponent},
    {path:'attachments', component: AttachmentsComponent}
  ]
},
  { path:'issuetrackergroup', component: IssueTrackerGroupsComponent},
  {path:'searchissueresult', component: SearchIssuesResultComponent},
  {path:'issuetracker/:formtype', component: AddEditIssueTrackerGroupsComponent}
  // {path:'editissuetracker', component: AddEditIssueTrackerGroupsComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
