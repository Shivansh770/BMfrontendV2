// import { Component, OnInit } from '@angular/core';
// import { LoginComponent } from '../login/login.component';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';
// import { CartsService } from 'src/app/services/carts.service';
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   IsLoggedIn = false;
//   ShowUserBoard = false;
//   ShowAdminBoard = false;
//   private roles: string[] = [];
  

//   UserName?: string;
//   CurrentUser: any;

//   hdn : boolean = false;
//   public TotalItem : number = 0;

//   constructor(public  authSer : AuthService,
//     public route : Router ,
//      public cartService : CartsService,
//      public User : UserService
//      ){}

//   ngOnInit(): void {

//     this.isLoggedinCheck();
//    this.IsLoggedIn = !! this.authSer.getToken();
  
//        if(this.IsLoggedIn){
//         this.roles = this.authSer.getRoleFromToken();
//         this.User.getRoleFromStore()
//     .subscribe(val=>{
//       let roleFromToken = this.authSer.getRoleFromToken();
//       this.roles = val || roleFromToken
//     })
//         console.log(this.roles);
        
//         this.UserName = this.authSer.getFullNameFromToken();
//         this.ShowAdminBoard = this.roles.includes('Admin')
//          this.ShowUserBoard = this.roles.includes('Doctor')

//        }

//    this.cartService.getProducts()
//     .subscribe(res=>{
//       this.TotalItem = res.length;
//     })
//     this.User.getFullNameFromStore()
//     .subscribe(val=>{
//       let fullNameFromToken = this.authSer.getFullNameFromToken();
//       this.CurrentUser = val || fullNameFromToken
//     })
       
//         console.log(this.CurrentUser + 'work in header')
    

//   }

//   isLoggedinCheck(){
//     if(this.authSer)
//     {
//       console.log("When logged in head component is called");
      
//       this.hdn=false;
//     }
//     else{
//       this.hdn=true;
//     }
//    }

//    logout(){
//     console.log("Logout called")
//     this.hdn=true
//     this.authSer.Logout();
//    }



// }
