import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCatalogDialogComponent } from './meal-catalog-dialog.component';

describe('MealCatalogDialogComponent', () => {
  let component: MealCatalogDialogComponent;
  let fixture: ComponentFixture<MealCatalogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCatalogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCatalogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
