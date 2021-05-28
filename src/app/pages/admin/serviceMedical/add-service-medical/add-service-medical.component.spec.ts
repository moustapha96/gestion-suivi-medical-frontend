import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceMedicalComponent } from './add-service-medical.component';

describe('AddServiceMedicalComponent', () => {
  let component: AddServiceMedicalComponent;
  let fixture: ComponentFixture<AddServiceMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
