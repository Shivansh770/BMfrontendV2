import { Component,OnInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { Drugs } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit{
  p=1;
  constructor(public drugService : DrugsService , private date : DatePipe ){

  }

  ngOnInit(): void {
    this.drugService.GetDrugs().subscribe(data=>{
      this.drugService.listDrug=data;
    });
    
  }
  populateDrug(selectedDrug : Drugs){
  
    
    let FF = this.date.transform(selectedDrug.ExpiryDate,'yyyy-MM-dd');
    selectedDrug.ExpiryDate = FF;
  
    console.log(FF);
          
      console.log(selectedDrug);
      this.drugService.DrugData=selectedDrug;
  
  
    }

    
    DeleteDrug(id:number){
     
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: ' #FF5C58',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result: { isConfirmed: any; }) => {
          if (result.isConfirmed) {
    
            this.drugService.DeleteDrug(id).subscribe(data=>{
              console.log("Drug has been removed");
              this.drugService.GetDrugs().subscribe(data=>{
                this.drugService.listDrug=data;
              });
               
              
            },err=>{
              console.log("An Error Occured , Drug cannot be removed");
            }
            )
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      
      
  
    }
}
