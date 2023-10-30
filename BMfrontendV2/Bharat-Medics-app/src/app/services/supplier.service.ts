import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class SupplierService{
    SupplierUrl : string = "https://localhost:7053/api/Supplier"
    listSupplier : Supplier[]=[];
    DataSupplier : Supplier = new Supplier();

    constructor(public http : HttpClient) { }

    GetSupplier():Observable<Supplier[]>{
        return this.http.get<Supplier[]>(this.SupplierUrl)  
    }
    InsertSupplier(){

        return this.http.post(this.SupplierUrl,this.DataSupplier)
      
    }
      
    UpdateSupplier(){
        return this.http.put(`${this.SupplierUrl}/${this.DataSupplier.SupplierId}`,this.DataSupplier)
    }
    DeleteSupplier(id:number){
      
        return this.http.delete(`${this.SupplierUrl}/${id}`)
    }


}
