import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceMedicalComponent } from './list-service-medical.component';

describe('ListServiceMedicalComponent', () => {
  let component: ListServiceMedicalComponent;
  let fixture: ComponentFixture<ListServiceMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
