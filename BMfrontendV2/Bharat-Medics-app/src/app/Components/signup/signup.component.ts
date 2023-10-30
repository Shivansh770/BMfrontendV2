// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { NgToastModule, NgToastService } from 'ng-angular-popup';
// import { AuthService } from 'src/app/services/auth.service';
// import { HttpErrorResponse } from '@angular/common/http';
// import ValidateForm from 'src/app/helpers/validateform';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })

// export class SignupComponent {

  

//   constructor(private fb : FormBuilder, private authservice : AuthService, private router:Router, private Toast : NgToastService)
//   {}

//   registerForm = new FormGroup({
//     username:new FormControl("",[Validators.required]),
//     name:new FormControl("",[Validators.required]),
//     email: new FormControl("",[Validators.required,Validators.email]),
//     age: new FormControl("",[Validators.required]),
//     password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
//     role: new FormControl("Select Role",[Validators.required]),

//   });

//   get username() : FormControl
//   {
//     return this.registerForm.get("username") as FormControl;
//   }

//   get name() : FormControl
//   {
//     return this.registerForm.get("name") as FormControl;
//   }

//   get email():FormControl
//   {
//     return this.registerForm.get("email") as FormControl;
//   }
//   get age():FormControl
//   {
//     return this.registerForm.get("age") as FormControl;
//   }

//   get password():FormControl
//   {
//     return this.registerForm.get("password") as FormControl;
//   }
//   get role():FormControl
//   {
//     return this.registerForm.get("role") as FormControl;
//   }

//    registerSubmit()
//    {

    
//     console.log(this.registerForm.value);
//     if(this.registerForm.valid){
//       this.authservice.SignUp([
//         this.registerForm.value.username,
//         this.registerForm.value.name,
//         this.registerForm.value.email,
//         this.registerForm.value.age,
//         this.registerForm.value.password

//       ]).subscribe(res=>{
//         console.log("hi");
//         if(res=="User Added Successfully")
//         {
//           alert(res);
//           this.router.navigateByUrl('login');
//         }
//         else
//         {
//           alert(res);
//         }
//       })
      
    
//     }
//   }



// }




// export class SignupComponent implements OnInit {
//   registerForm: FormGroup;
//   temp: string;
  

//   constructor(private fb : FormBuilder, private auth : AuthService, private router : Router , private Toast : NgToastService){}

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       username : ['',Validators.required],
//       passowrd :['',Validators.required],
//       name :['',Validators.required],
//       email :['',Validators.required]
//     })
//   }

//   OnSubmit(){
    
//     if(this.registerForm.valid){
//       this.auth.SignUp(this.registerForm.value)
//         .subscribe({
//                 next:(res=>{
//                   console.log(this.registerForm.value);
             
//                   this.Toast.success({detail:"Success", summary : res.message , duration:3500});
            
//             this.registerForm.reset();
//             console.log(res.status);
            
            
//              this.router.navigate(['login']);
//           })
//         ,error:(err=>{
//           console.log(err);
          
//           this.temp=err.error.message;
      
   
//      console.log(this.temp);
        
//           this.Toast.error({detail:"Error", summary :this.temp, duration:3500});
          
//         })


//       })
    
//       console.log(this.registerForm.value);
//       console.log("Working");
      
//     }
//     else {
//             console.log("Not Working");
//             ValidateForm.ValidateAllFormFeilds(this.registerForm);
//             alert("Invalid Details.");

            
//     }

//   }

  

// }

  

  // OnSubmit() {
  //   console.log(this.registerForm);
  //   // this.user.roles = "USER";
  //   this.user.username = this.registerForm.get('username')?.value;
  //   this.user.name = this.registerForm.get('name')?.value;
  //   this.user.email = this.registerForm.get('email')?.value;
  //   this.user.password=this.registerForm.get('password')?.value;
  //   console.log(this.user);
  //   this.auth.SignUp(this.registerForm.value).subscribe(data => console.log(data));
  //   this.router.navigate(['/login']);
  // }





  

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  
  constructor(private authservice : AuthService, private router:Router){}
  

  registerForm = new FormGroup({
    username:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    age: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
    role: new FormControl("Select Role",[Validators.required]),

  });

  get username() : FormControl
  {
    return this.registerForm.get("username") as FormControl;
  }

  get name() : FormControl
  {
    return this.registerForm.get("name") as FormControl;
  }

  get email():FormControl
  {
    return this.registerForm.get("email") as FormControl;
  }

  get password():FormControl
  {
    return this.registerForm.get("password") as FormControl;
  }
  get age():FormControl
  {
    return this.registerForm.get("age") as FormControl;
  }
  get role():FormControl
  {
    return this.registerForm.get("role") as FormControl;
  }

    registerSubmit()
    {
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.authservice.SignUp([
        this.registerForm.value.username,
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.age,
        this.registerForm.value.password

      ]).subscribe(res=>{
        
        if(res=="User Added Successfully")
        {
          alert(res);
          this.router.navigateByUrl('login');
        }
        else
        {
          alert(res);
        }
      });
      
    
    }
  }





}

