import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private fullName$ = new BehaviorSubject<string>("");
private role$ = new BehaviorSubject<string>("");
private email$ = new BehaviorSubject<string>("");

  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();

  }

  public setRoleForStore(role:string)
  {
        this.role$.next(role);
  }

  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullName : string){
    this.fullName$.next(fullName);
  }

  public getEmailFromStore(){
    return this.email$.asObservable();
  }
  public setEmailFromStore(email : string)
  {
    this.email$.next(email)
  }



}
