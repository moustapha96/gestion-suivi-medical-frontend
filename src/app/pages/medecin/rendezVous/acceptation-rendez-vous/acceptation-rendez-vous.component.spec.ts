import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptationRendezVousComponent } from './acceptation-rendez-vous.component';

describe('AcceptationRendezVousComponent', () => {
  let component: AcceptationRendezVousComponent;
  let fixture: ComponentFixture<AcceptationRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptationRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptationRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
