import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  myChoice: string = 'Delivery';
  constructor(    public dialogRef: MatDialogRef<OrderDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private router:Router) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  navigate(){
    this.router.navigateByUrl("/confirmation");

  }

  choices = [
    'Delivery',
    'Pickup'
  ]

}
