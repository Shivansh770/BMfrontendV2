import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Drugs } from 'src/app/models/drug.model';
import { Supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-supplierform',
  templateUrl: './supplierform.component.html',
  styleUrls: ['./supplierform.component.css']
})
export class SupplierformComponent {

  constructor(public SupplierServic : SupplierService , public route : Router){

  }

  submit(form:NgForm)
  {
    console.log("Ok");

    if(this.SupplierServic.DataSupplier.SupplierId==0 || this.SupplierServic.DataSupplier.SupplierId==null)
    { 
      
      
      this.insertForm(form);
      
     
    }
    else{
      this.UpdateForm(form);
      
    }
  }

  insertForm(from:NgForm){
 
    console.log("insert called");
    this.SupplierServic.InsertSupplier().subscribe(d=>{
      
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['supplier']);
      Swal.fire('Added Successfully')
      console.log("Saved");
     
    });

  }

  UpdateForm(from:NgForm){
    this.SupplierServic.UpdateSupplier().subscribe(d=>{
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['supplier']);
     Swal.fire('Updated Successfully')
      //this.toast.success({detail:"Updated" , summary :"Drug has been updated"})
      console.log("Refresh & update done");
    });

  }

  ResetForm(from:NgForm){
    from.form.reset();
    this.SupplierServic.DataSupplier= new Supplier();

  }

  Refresh(){
    this.SupplierServic.GetSupplier().subscribe(res=>{
      this.SupplierServic.listSupplier = res;
    });
  }


}
