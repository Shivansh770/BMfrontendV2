import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { order } from 'src/app/models/order.model';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  p=1;
  constructor(public orderServ : OrderService , private date : DatePipe ){

  }

  ngOnInit(): void {
    this.orderServ.GetOrder().subscribe(data=>{
      this.orderServ.listOrder=data;
    
    });
    
  }
  populateDrug(selectedOrder : order){
  
    let df = this.date.transform(selectedOrder.DateOfOrder,'yyyy-MM-dd');
    selectedOrder.DateOfOrder = df;
   
  
    console.log(df);
          
      console.log(selectedOrder);
      this.orderServ.DataOrder=selectedOrder;
  
  
    }

    
    DeleteDrug(id:number){
     
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            this.orderServ.DeleteOrder(id).subscribe(data=>{
              console.log("Drug has been removed");
              this.orderServ.GetOrder().subscribe(data=>{
                this.orderServ.listOrder=data;
              });
               
              
            },err=>{
              console.log("An Error Occured , Drug cannot be removed");
            }
            )
            
            Swal.fire(
              'Deleted!',
              'Order has Been Removed',
              'success'
            )
          }
        })
      
      
  
    }

}
