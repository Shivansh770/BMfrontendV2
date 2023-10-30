import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugformsComponent } from './drugforms.component';

describe('DrugformsComponent', () => {
  let component: DrugformsComponent;
  let fixture: ComponentFixture<DrugformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugformsComponent]
    });
    fixture = TestBed.createComponent(DrugformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
