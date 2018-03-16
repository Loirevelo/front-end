import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPartnerComponent } from './landing-partner.component';

describe('LandingPartnerComponent', () => {
  let component: LandingPartnerComponent;
  let fixture: ComponentFixture<LandingPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
