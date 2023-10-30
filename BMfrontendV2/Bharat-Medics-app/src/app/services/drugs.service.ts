import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drugs } from '../models/drug.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

   private DrugsUrl : string = 'https://localhost:7053/api/Drug'
   DrugData : Drugs = new Drugs()
   listDrug : Drugs[]=[]

  constructor(private myhttp : HttpClient) { }

  InsertDrug()
  {
           return this.myhttp.post(this.DrugsUrl, this.DrugData);
  }
  UpdateDrug()
  {
           return this.myhttp.put(`${this.DrugsUrl}/${this.DrugData.DrugId}` , this.DrugData);
  }
  
  GetDrugs(): Observable <Drugs[]>
  {
    return this.myhttp.get<Drugs[]>(this.DrugsUrl);
  }

  
  DeleteDrug(id:number)
  {
           return this.myhttp.delete(`${this.DrugsUrl}/${id}`);
           console.log("DELETED");
  }


}
