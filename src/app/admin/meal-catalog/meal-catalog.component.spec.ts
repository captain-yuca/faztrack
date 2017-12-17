import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCatalogComponent } from './meal-catalog.component';

describe('MealCatalogComponent', () => {
  let component: MealCatalogComponent;
  let fixture: ComponentFixture<MealCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
