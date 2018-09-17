import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueInfoTabComponent } from './issue-info-tab.component';

describe('IssueInfoTabComponent', () => {
  let component: IssueInfoTabComponent;
  let fixture: ComponentFixture<IssueInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
