import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
import { Drugs } from 'src/app/models/drug.model';
import { DatePipe } from '@angular/common';
import { DrugsService } from 'src/app/services/drugs.service';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  p=1;
  constructor(public ServiceSupl : SupplierService , public date : DatePipe){}
  ngOnInit() : void{
 
    this.ServiceSupl.GetSupplier().subscribe(data=>{
      this.ServiceSupl.listSupplier=data;
    })
    
  }
  
  populateSupplier(selectedSupplier : Supplier){
    let df = this.date.transform(this.ServiceSupl.DataSupplier.Drugs?.ExpiryDate,'yyyy-MM-dd');
    selectedSupplier.Drugs.ExpiryDate= df;

    this.ServiceSupl.DataSupplier = selectedSupplier

  }
  DeleteSupplier(id:number){

    this.ServiceSupl.DeleteSupplier(id).subscribe(data=>{
        
                  this.ServiceSupl.GetSupplier().subscribe(dt=>{
                    this.ServiceSupl.listSupplier=dt;
                  })

    },err=>{
      console.log("Supplier cannot be remmoved")
    }
    )

  }


  

}
