import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {CurrentOrdersDialogComponent } from './current-orders-dialog/current-orders-dialog.component';
@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {
  displayedColumns = ['pos', 'customer', 'delivery', 'meals', 'price', 'date', 'pickupTime', 'orderTime', 'pickupTime', 'status'];
  dataSource = new MatTableDataSource<Order>(ORDER_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  open(){
    let dialogRef = this.dialog.open(CurrentOrdersDialogComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }



}
export interface Order {
  pos:number
  customer: string;
  meals: string;
  price: number;
  date: string;
  orderTime: string;
  delivery:string;
  pickupTime:string;
  pickupDate:string;
  status:string;
}
const ORDER_DATA:Order[] = [
  {pos:1,customer:"Harry Potter", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"Ready"},
  {pos:2, customer:"Manuel Sanchez", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"In Progress"},
  {pos:3, customer:"Maria Huracan", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"Canceled By Customer"}

]
