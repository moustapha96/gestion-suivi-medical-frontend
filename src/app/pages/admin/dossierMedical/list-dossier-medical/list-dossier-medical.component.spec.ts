import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDossierMedicalComponent } from './list-dossier-medical.component';

describe('ListDossierMedicalComponent', () => {
  let component: ListDossierMedicalComponent;
  let fixture: ComponentFixture<ListDossierMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDossierMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
