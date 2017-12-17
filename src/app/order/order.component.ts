import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '60%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }

}
