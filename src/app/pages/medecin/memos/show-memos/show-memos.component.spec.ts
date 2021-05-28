import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemosComponent } from './show-memos.component';

describe('ShowMemosComponent', () => {
  let component: ShowMemosComponent;
  let fixture: ComponentFixture<ShowMemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
