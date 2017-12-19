import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MealCatalogDialogComponent } from './meal-catalog-dialog/meal-catalog-dialog.component';

@Component({
  selector: 'app-meal-catalog',
  templateUrl: './meal-catalog.component.html',
  styleUrls: ['./meal-catalog.component.css']
})
export class MealCatalogComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'price', 'visibility', 'imgUrl', 'mealTags'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {



  }

  event(element:Element){
    let isAdd = false;
    if(element == null){
      element = {id: 1, name: 'Milk Shake', description:'Desc', price: 3.99, visibility:'true', imgUrl:'fakepath', mealTags:'keto, low carb'};
      isAdd = true
    }
    console.log(element);
    let dialogRef = this.dialog.open(MealCatalogDialogComponent, {
      width: '60%',
      data: { name: element.name, description: element.description, price:element.price, isAdd:isAdd, imgUrl:element.imgUrl, visibility:element.visibility, mealTags:element.mealTags}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
export interface Element {
  name: string;
  id: number;
  description: string;
  price: number;
  visibility:string
  imgUrl:string
  mealTags:string
}

const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Milk Shake', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99, visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 2, name: 'Chuleta', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 3, name: 'Pollo', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 4, name: 'Arroz con Pollo', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 5, name: 'Cant', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 6, name: 'Carbon', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 7, name: 'Nitrogen', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 8, name: 'Oxygen', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 9, name: 'Fluorine', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 10, name: 'Neon', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 11, name: 'Sodium', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 12, name: 'Magnesium', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 13, name: 'Aluminum', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 14, name: 'Silicon', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 15, name: 'Phosphorus', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'true', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 16, name: 'Sulfur', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'false', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 17, name: 'Chlorine', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'false', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 18, name: 'Argon', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'false', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 19, name: 'Potassium', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'false', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
  {id: 20, name: 'Calcium', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 3.99,visibility:'false', imgUrl:'http://falsepath.com', mealTags:'keto, low carb'},
];
