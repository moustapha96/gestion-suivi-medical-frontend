import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDossierMedicalComponent } from './add-dossier-medical.component';

describe('AddDossierMedicalComponent', () => {
  let component: AddDossierMedicalComponent;
  let fixture: ComponentFixture<AddDossierMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDossierMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
