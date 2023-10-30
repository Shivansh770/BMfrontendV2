import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Drugs } from 'src/app/models/drug.model';
import { order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent {

  tez: string;

  constructor(public orderSerrvice : OrderService, public route : Router){

  }

  submit(form:NgForm)
  {
    console.log("OK");

    if(this.orderSerrvice.DataOrder.OrderId==0 || this.orderSerrvice.DataOrder.OrderId==null)
    { 
      
      
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
      this.route.navigate(['order']);
      Swal.fire('Added Successfully')
      console.log("Saved");
     
    });

  }

  UpdateForm(from:NgForm){
    this.orderSerrvice.UpdateOrder().subscribe(d=>{
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['order']);
     Swal.fire('Updated Successfully')
      //this.toast.success({detail:"Updated" , summary :"Drug has been updated"})
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
