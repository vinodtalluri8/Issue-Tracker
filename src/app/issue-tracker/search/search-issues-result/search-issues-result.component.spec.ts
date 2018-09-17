import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIssuesResultComponent } from './search-issues-result.component';

describe('SearchIssuesResultComponent', () => {
  let component: SearchIssuesResultComponent;
  let fixture: ComponentFixture<SearchIssuesResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIssuesResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIssuesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
