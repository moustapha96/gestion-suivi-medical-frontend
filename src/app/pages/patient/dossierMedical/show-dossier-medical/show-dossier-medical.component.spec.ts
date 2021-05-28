import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDossierMedicalComponent } from './show-dossier-medical.component';

describe('ShowDossierMedicalComponent', () => {
  let component: ShowDossierMedicalComponent;
  let fixture: ComponentFixture<ShowDossierMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDossierMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
