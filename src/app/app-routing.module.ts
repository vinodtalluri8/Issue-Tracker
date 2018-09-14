import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { EnterComponent } from "./enter/enter.component";
import { IssueTrackerGroupsComponent } from "./maintenance/issue-tracker-groups/issue-tracker-groups.component";



const routes: Routes = [
  { path:'search', component: SearchComponent},
  { path:'enter', component: EnterComponent},
  { path:'issuetrackergroup', component: IssueTrackerGroupsComponent}
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
