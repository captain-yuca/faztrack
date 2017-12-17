import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrdersDialogComponent } from './current-orders-dialog.component';

describe('CurrentOrdersDialogComponent', () => {
  let component: CurrentOrdersDialogComponent;
  let fixture: ComponentFixture<CurrentOrdersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrdersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrdersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
