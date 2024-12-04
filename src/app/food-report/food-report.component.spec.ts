import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodReportComponent } from './food-report.component';

describe('FoodReportComponent', () => {
  let component: FoodReportComponent;
  let fixture: ComponentFixture<FoodReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodReportComponent]
    });
    fixture = TestBed.createComponent(FoodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
