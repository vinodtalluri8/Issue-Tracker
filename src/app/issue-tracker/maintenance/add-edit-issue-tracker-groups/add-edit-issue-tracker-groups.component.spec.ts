import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIssueTrackerGroupsComponent } from './add-edit-issue-tracker-groups.component';

describe('AddEditIssueTrackerGroupsComponent', () => {
  let component: AddEditIssueTrackerGroupsComponent;
  let fixture: ComponentFixture<AddEditIssueTrackerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditIssueTrackerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIssueTrackerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
