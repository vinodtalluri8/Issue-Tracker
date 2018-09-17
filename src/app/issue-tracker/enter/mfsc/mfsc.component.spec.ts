import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfscComponent } from './mfsc.component';

describe('MfscComponent', () => {
  let component: MfscComponent;
  let fixture: ComponentFixture<MfscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
