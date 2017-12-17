import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-meal-catalog-dialog',
  templateUrl: './meal-catalog-dialog.component.html',
  styleUrls: ['./meal-catalog-dialog.component.css']
})
export class MealCatalogDialogComponent implements OnInit {
  private isDelete:boolean = false;
  constructor(    public dialogRef: MatDialogRef<MealCatalogDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
    this.isDelete = false;
  }
  delete(){
    this.isDelete = true;
  }

}
