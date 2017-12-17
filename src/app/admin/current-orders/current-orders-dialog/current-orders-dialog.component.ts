import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-current-orders-dialog',
  templateUrl: './current-orders-dialog.component.html',
  styleUrls: ['./current-orders-dialog.component.css']
})
export class CurrentOrdersDialogComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<CurrentOrdersDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private router:Router) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
