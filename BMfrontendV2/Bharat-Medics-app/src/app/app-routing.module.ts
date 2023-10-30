import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DrugsComponent } from './Components/drugs/drugs.component';
import { DrugformsComponent } from './Components/drugs/drugforms/drugforms.component';
import { SupplierComponent } from './Components/supplier/supplier.component';
import { SupplierformComponent } from './Components/supplier/supplierform/supplierform.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderformComponent } from './Components/orders/orderform/orderform.component';
import { CartsComponent } from './Components/DoctorContent/carts/carts.component';
import { DashboardDoctorComponent } from './Components/DoctorContent/dashboard-doctor/dashboard-doctor.component';
import { UserOrdersComponent } from './Components/DoctorContent/user-orders/user-orders.component';
import { SalesreportComponent } from './Components/salesreport/salesreport.component';
import { Notfound404Component } from './Components/errors/notfound404/notfound404.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  //{path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path: "signup",component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component : DashboardComponent //canActivate:[AuthGuard]
  },
  {path: "drugs", component : DrugsComponent},
  {path : "editDrugs", component : DrugformsComponent},
  {path : "supplier", component : SupplierComponent},
  {path: "supplierform", component : SupplierformComponent},
  {path: "order",component : OrdersComponent},
  {path: "orderFromUser",component : OrderformComponent},
  {path: "cart", component: CartsComponent},
  {path: "dashboarddoctor", component : DashboardDoctorComponent},
  {path: "userorder", component: UserOrdersComponent},
  {path: "SalesReport", component : SalesreportComponent},
  {path: "",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
