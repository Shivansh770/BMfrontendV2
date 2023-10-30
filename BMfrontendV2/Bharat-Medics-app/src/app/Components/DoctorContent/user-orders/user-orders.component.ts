import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { CartsComponent } from '../carts/carts.component';
import { CartsService } from 'src/app/services/carts.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{
  
  totalPrice: number;
  tp: number;
  ti : number;

  constructor(public orderSerrvice: OrderService , public route : Router , public rs : ActivatedRoute , public user : UserService 
    ,public authSer : AuthService , public cartSe : CartsService){

  }

  ngOnInit() {
    this.tp = Number(this.rs.snapshot.paramMap.get('quantity1'))
    this.ti = Number(this.rs.snapshot.paramMap.get('quantity2'))
    this.orderSerrvice.DataOrder.TotalAmount = this.tp;
    this.orderSerrvice.DataOrder.QuantityBooked = this.ti;
    this.orderSerrvice.DataOrder.Email = String(this.authSer.getEmailFromToken());

  }

  submit(form:NgForm)
  {
    console.log("OK");

    if(this.orderSerrvice.DataOrder.OrderId==0 || this.orderSerrvice.DataOrder.OrderId==null)
    { 
      console.log("this is total price" + this.tp)
      
      this.insertForm(form);
      
     
    }
    else{
      this.UpdateForm(form);
      
    }
  }

  insertForm(from:NgForm){
 
    console.log("insert called");
    this.orderSerrvice.InsertOrder().subscribe(d=>{
      
      
      
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['dasboarddoctor']);
      Swal.fire('Your Order has been Placed');

  this.cartSe.removeAllCart();
      console.log("Saved");
     
    });

  }

  UpdateForm(from:NgForm){
    this.orderSerrvice.UpdateOrder().subscribe(d=>{
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['order']);
     Swal.fire('Updated Successfully')
      console.log("Refresh & update done");
    });

  }

  ResetForm(from:NgForm){
    from.form.reset();
    this.orderSerrvice.DataOrder= new order();

  }

  Refresh(){
    this.orderSerrvice.GetOrder().subscribe(res=>{
      this.orderSerrvice.listOrder = res;
    });
  }








  

}
