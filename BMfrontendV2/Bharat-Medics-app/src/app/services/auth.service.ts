// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { NgToastComponent, NgToastService } from 'ng-angular-popup';
// import { Router } from '@angular/router';
// import { environment } from '../environments/environment.development';
// import { TestBed } from '@angular/core/testing';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private userPayload : any;

//   private baseUrl='https://localhost:7053/api/User/'
//   constructor(private http : HttpClient , private route : Router , public toast : NgToastService ) {
//     this.userPayload = this.decodedToken();
//    }

//    SignUp(UserObj: any) {
//     return this.http.post<any>(`${this.baseUrl}/Signup`, {
//       username:UserObj[0],
//       name:UserObj[1],
//       email:UserObj[2],
//       age:UserObj[3],
//       password:UserObj[4]
//     }); 
//     }
//   Login(LoginObj : any){
//     return this.http.post<any>(`${this.baseUrl}/login`,{
//       Username:LoginObj[0],
//       Password:LoginObj[1]
//     });
//   }

//   Logout(){
//     localStorage.clear();
//     this.toast.success({detail:"Success", summary : "You have been Logout" , duration:3500});
//     this.route.navigate(['login'])
//   }

//     isLogged():boolean{
  

//       return !! localStorage.getItem('token')
//     }
  
//   decodedToken(){
//     const jwtHelper = new JwtHelperService();
//    const token = this.getToken();
//    var nex = <string>token;

//     return jwtHelper.decodeToken(nex);
//  }

//  getFullNameFromToken(){
//   if(this.userPayload)
//   return this.userPayload.unique_name;
//   }
// getRoleFromToken(){
//   if(this.userPayload){
//     return this.userPayload.role;
//   }
// }

// getEmailFromToken(){
//   if(this.userPayload){
//     return this.userPayload.email;
//   }
// }

// getToken() {
  
//   return localStorage.getItem('token')
//   }

//   storeToken (tokenValue: string){
//     localStorage.setItem('token',tokenValue);

//   }
//   jwtHelperService = new JwtHelperService();

  

// }




import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPayload : any;
  private baseUrl='https://localhost:7053/api/User/'
  constructor(private http: HttpClient, private route:Router, public toast : NgToastService) { 
    this.userPayload = this.decodedToken();
  }

  SignUp(UserObj:any){
    return this.http.post<any>(`${this.baseUrl}SignUp`,{
        username:UserObj[0],
        name:UserObj[1],
        email:UserObj[2],
        age:UserObj[3],
        password:UserObj[4], 
    });

  }

  Login(LoginObj:any){ //Admin
    return this.http.post<any>(`${this.baseUrl}Login`,{
       username:LoginObj[0],
       password:LoginObj[1] 
    });
  }

  DoctorLogin(DoctorLoginObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}DoctorLogin`,{
      username:DoctorLoginObj[0],
      password:DoctorLoginObj[1],

    });

  }

  Logout(){
    localStorage.clear();
    this.toast.success({detail:"Success", summary : "You have been Logout" , duration:3500});
    this.route.navigate(['login'])
  }

  isLoggedIn():boolean{ //Admin
    return  localStorage.getItem('token')?true:false;
  }

  getToken() {
  
    return localStorage.getItem('token');
  }

  setToken (tokenValue: string){
    localStorage.setItem('token',tokenValue);

  }
  jwtHelperService = new JwtHelperService();

  getDoctorToken():string | null
  {
    return localStorage.getItem("Doctortoken");
  }

  setDoctorToken (tokenValue: string)
  {
    return localStorage.setItem("Doctortoken",tokenValue);
  }

  isDoctorLoggedIn():boolean{
    return localStorage.getItem("Doctortoken")?true:false;
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
   const token = this.getToken();
   var nex = <string>token;

    return jwtHelper.decodeToken(nex);
  }
  
 
}
