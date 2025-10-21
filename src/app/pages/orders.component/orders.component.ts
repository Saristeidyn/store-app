import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-orders.component',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: false
})

export class OrdersComponent implements OnInit {

  constructor(private orderService : OrderService){}

  orders : Order[] = [
    
  ];

  ngOnInit(): void {
    console.log("start")
    this.orderService.getAllOrders().subscribe(res=> {
      this.orders = res;
    });
    console.log("Fin de componenete")
  }
  
}
