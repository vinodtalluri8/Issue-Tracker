import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilanceViolationComponent } from './compilance-violation.component';

describe('CompilanceViolationComponent', () => {
  let component: CompilanceViolationComponent;
  let fixture: ComponentFixture<CompilanceViolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilanceViolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilanceViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
