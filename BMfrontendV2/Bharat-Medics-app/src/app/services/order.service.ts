import { Injectable } from '@angular/core';
import { order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {

    orderUrl : string = 'https://localhost:7053/api/Order'
    DataOrder : order = new order()
    listOrder :order[] = []

    constructor(public http: HttpClient) { }

    GetOrder():Observable<order[]>{
        return this.http.get<order[]>(this.orderUrl)  
    }

    InsertOrder(){
 
        return this.http.post(this.orderUrl,this.DataOrder)
      
    }

    UpdateOrder(){
        return this.http.put(`${this.orderUrl}/${this.DataOrder.OrderId}`,this.DataOrder)
    }

    DeleteOrder(id:number){
 
        return this.http.delete(`${this.orderUrl}/${id}`)
    }




  }  