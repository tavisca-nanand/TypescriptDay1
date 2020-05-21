import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/app.models';
import { Customers } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-custsender-component',
  template: `
   <div class="container">
     <h2>CustomersList</h2>
     <table class="table table-striped table-bordered">
       <thead>
         <tr>
           <th>CustomerId</th>
           <th>CustomerName</th>
           <th>City</th>
           <th>Email</th>
           <th>ContactNumber</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor = "let c of filteredCustomers" (click)="getSelectedRow(c)">
           <td>{{c.CustomerId}}</td>
           <td>{{c.CustomerName}}</td>
           <td>{{c.City}}</td>
           <td>{{c.Email}}</td>
           <td>{{c.ContactNumber}}</td>
         </tr>
       </tbody>
     </table>
</div>
  `
})

export class CustSenderComponent implements OnInit {
    cust: Customer;
    custs = Customers;
    _filteredCustomers : Array<Customer>;
    searchQuery : string;
  constructor(private serv: CommunicationService) {
    this.cust = new Customer(0,'','','',0);
    this.searchQuery = '';
  }


  ngOnInit() { 
    this.serv.emitSearchQuery.subscribe((data) => {
      console.log(`The Received value is ${data}`);
      this.searchQuery = data;
    });
  }

  get filteredCustomers() : Array<Customer>{
    this._filteredCustomers = new Array<Customer>();
    if(this.searchQuery.length > 0)
    {
      this._filteredCustomers = this.custs.filter((c,i) => {
        return c.City.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        c.CustomerName.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }else{
      this._filteredCustomers = this.custs;
    }

    this.serv.onCustomerFilteration(this._filteredCustomers.map(x => x.CustomerId));

    return this._filteredCustomers;
  }


  getSelectedRow(c : Customer): void {
      this.cust = c;
      this.serv.onEmiteValue(this.cust.CustomerId);
  }


}
