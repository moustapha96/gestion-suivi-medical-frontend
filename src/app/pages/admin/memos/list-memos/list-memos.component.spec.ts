import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemosComponent } from './list-memos.component';

describe('ListMemosComponent', () => {
  let component: ListMemosComponent;
  let fixture: ComponentFixture<ListMemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
