import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCityComponent } from './about-city.component';

describe('AboutCityComponent', () => {
  let component: AboutCityComponent;
  let fixture: ComponentFixture<AboutCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
