import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TransactionDialogComponent} from './transaction-dialog/transaction-dialog.component';
@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  displayedColumns = ['customer', 'delivery', 'meals', 'price', 'date', 'status'];
  dataSource = new MatTableDataSource<Order>(ORDER_DATA);
  total = "$31.97";


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  open(){
    let dialogRef = this.dialog.open(TransactionDialogComponent, {
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
  {pos:1,customer:"Harry Potter", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"Completed"},
  {pos:2, customer:"Manuel Sanchez", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"Pending"},
  {pos:3, customer:"Maria Huracan", delivery:"Martinez", meals:"Chuleta, Milkshake", price:10.99, date:"12/12/2017", orderTime:"12:00pm", pickupTime:"2:00pm", pickupDate:"12/12/2017", status:"Completed"}

]
