import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Drugs } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drugforms',
  templateUrl: './drugforms.component.html',
  styleUrls: ['./drugforms.component.css']
})
export class DrugformsComponent {

    try:string= ""

    constructor(public DrugsService : DrugsService , private route : Router, private toast : NgToastService){

    }

    submit(form:NgForm)
    {
      console.log("OK");

      if(this.DrugsService.DrugData.DrugId==0 || this.DrugsService.DrugData.DrugId==null)
      {
        this.try='Add Drugs'
        this.insertForm(form);
      }else{
        this.updateForm(form);
      }

    }

    insertForm(from:NgForm){
      console.log("Drugs Inserted");
      this.DrugsService.InsertDrug().subscribe(d=>{
      
        this.ResetForm(from);
        this.Refresh();
        this.route.navigate(['drugs']);
        Swal.fire('Added Successfully')
        console.log("Saved");
      });
    }

    updateForm(from:NgForm){
      this.DrugsService.UpdateDrug().subscribe(d=>{
        this.ResetForm(from);
        this.Refresh();
        this.route.navigate(['drugs']);
        Swal.fire('Updated Successfully')
        console.log("Update done");
      });

    }

    ResetForm(from:NgForm){
      from.form.reset();
      this.DrugsService.DrugData = new Drugs();
    }

    Refresh(){
      this.DrugsService.GetDrugs().subscribe(res=>{
        this.DrugsService.listDrug = res;
      });
    }


}
