import { Department, Employee, Customer, Order } from './app.models';
export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];


export const Customers : Array<Customer> = new Array<Customer>();
Customers.push(new Customer(101,'cust1','pune','abc@gmail.com',9571819706));
Customers.push(new Customer(102,'cust2','nagpur','def@gmail.com',9468770311));
Customers.push(new Customer(103,'cust3','mumbai','xyz@gmail.com',4654655855));


export const Orders : Array<Order> = new Array<Order>();
Orders.push(new Order(1,'cellphone','8-05-2020',101,1,50000));
Orders.push(new Order(2,'mouse','9-05-2020',101,1,500));
Orders.push(new Order(3,'chips','10-05-2020',102,1,50));
Orders.push(new Order(4,'laptop','11-05-2020',102,1,500000));
Orders.push(new Order(5,'choclates','12-05-2020',103,1,120));
Orders.push(new Order(6,'charger','13-05-2020',103,1,1520));