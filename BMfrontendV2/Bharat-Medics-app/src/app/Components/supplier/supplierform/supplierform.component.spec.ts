import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierformComponent } from './supplierform.component';

describe('SupplierformComponent', () => {
  let component: SupplierformComponent;
  let fixture: ComponentFixture<SupplierformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierformComponent]
    });
    fixture = TestBed.createComponent(SupplierformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
