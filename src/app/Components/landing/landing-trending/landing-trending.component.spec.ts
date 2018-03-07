import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTrendingComponent } from './landing-trending.component';

describe('LandingTrendingComponent', () => {
  let component: LandingTrendingComponent;
  let fixture: ComponentFixture<LandingTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
