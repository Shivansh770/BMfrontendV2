import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';
import { CartsComponent } from '../carts/carts.component';
import { CartsService } from 'src/app/services/carts.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  p=1;
  public role : string
  public fullName : string
  public ListDrug : any =[]
  constructor(public Supplier : SupplierService, public cartService : CartsService , public toast : NgToastService){}

  ngOnInit(): void {
    this.Supplier.GetSupplier().
    subscribe(
      res=>{
        this.ListDrug = res;
    })

    this.ListDrug.forEach((a:any) => {
      
      Object.assign(a,{quantity:1,total:a.drugs.Price});
      console.log(this.ListDrug)
    });
    
  }

  addtocart(item : any){
    this.toast.success({detail:"Success", summary : 'item has been added' , duration:1000});
    this.cartService.addtoCart(item);
  }


  


}
