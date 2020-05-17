import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/app.models';
import { Orders } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-orderreceiver-component',
  template: `
  <div class="container">
   <h2>OrdersList</h2>
     <table class="table table-striped table-bordered">
       <thead>
         <tr>
         <th>OrderId</th>
         <th>OrderName</th>
         <th>Date</th>
         <th>CustomerId</th>
         <th>OrderQuantity</th>
         <th>Amount</th>

         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let o of filteredOrders">
         <td>{{o.OrderId}}</td>
         <td>{{o.OrderName}}</td>
         <td>{{o.Date}}</td>
         <td>{{o.CustomerId}}</td>
         <td>{{o.OrderQuantity}}</td>
         <td>{{o.Amount}}</td>
         </tr>
       </tbody>
     </table>
    </div>
  `
})

export class OrderReceiverComponent implements OnInit {
    order : Order;
    orders = Orders;
    custId: number;
    customerIds : Array<number>;
    _filteredOrders: Array<Order>;
  constructor(private serv: CommunicationService) {
    this.order = new Order(0,'','',0,0,0);
    this.custId = 0;
    this._filteredOrders= new Array<Order>();
    this.customerIds = new Array<number>();
    console.log('Constructor Called');
  }
  // receiver will subscribe to the event from the service
  // and receiv data from the event
  ngOnInit() {
      console.log('in ngOnInit() method')
      this.serv.emitValue.subscribe((data) => {
          console.log(`The Received value is ${data}`);
          this.custId = data;
      });

      this.serv.emitCustomerFilteration.subscribe((data) => {
          this.customerIds = data;
      });
  }

  get filteredOrders() : Array<Order> {
    this._filteredOrders = new Array<Order>();
    if (this.custId > 0) {
       this._filteredOrders = this.orders.filter((e,i) => {
         return e.CustomerId === this.custId;
       });
    } 
    else if (this.customerIds.length > 0) {
     this._filteredOrders = this.orders.filter((o,i) => {
       return this.customerIds.includes(o.CustomerId);
     });
  }
    else {
      this._filteredOrders = this.orders;
    }
    return this._filteredOrders;
  }
}
