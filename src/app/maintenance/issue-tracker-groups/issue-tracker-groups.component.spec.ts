import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTrackerGroupsComponent } from './issue-tracker-groups.component';

describe('IssueTrackerGroupsComponent', () => {
  let component: IssueTrackerGroupsComponent;
  let fixture: ComponentFixture<IssueTrackerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTrackerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTrackerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
