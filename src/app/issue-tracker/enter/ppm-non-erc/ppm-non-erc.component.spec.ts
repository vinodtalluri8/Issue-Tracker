import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmNonErcComponent } from './ppm-non-erc.component';

describe('PpmNonErcComponent', () => {
  let component: PpmNonErcComponent;
  let fixture: ComponentFixture<PpmNonErcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmNonErcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmNonErcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
