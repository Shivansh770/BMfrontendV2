import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS,  HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartsComponent } from './Components/DoctorContent/carts/carts.component';
import { DashboardDoctorComponent } from './Components/DoctorContent/dashboard-doctor/dashboard-doctor.component';
import { UserOrdersComponent } from './Components/DoctorContent/user-orders/user-orders.component';
import { DrugsComponent } from './Components/drugs/drugs.component';
import { DatePipe } from '@angular/common';
import { DrugformsComponent } from './Components/drugs/drugforms/drugforms.component';
import { SupplierComponent } from './Components/supplier/supplier.component';
import { SupplierformComponent } from './Components/supplier/supplierform/supplierform.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './Interceptor/token.interceptor';
import { OrderformComponent } from './Components/orders/orderform/orderform.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SalesreportComponent } from './Components/salesreport/salesreport.component';
import { Notfound404Component } from './Components/errors/notfound404/notfound404.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { HomeComponent } from './Components/home/home.component';
import { AuthService } from './services/auth.service';
import { CartsService } from './services/carts.service';
import { DrugsService } from './services/drugs.service';
import { UserService } from './services/user.service';
import { OrderService } from './services/order.service';
import { SupplierService } from './services/supplier.service';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CartsComponent,
    DashboardDoctorComponent,
    UserOrdersComponent,
    DrugsComponent,
    DrugformsComponent,
    SupplierComponent,
    SupplierformComponent,
    OrdersComponent,
    OrderformComponent,
    SalesreportComponent,
    Notfound404Component,
    HomeComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientTestingModule,
    NgxPaginationModule,
    NgToastModule,
    MdbCheckboxModule,

    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
  },
    DatePipe,
    AuthService,
    CartsService,
    DrugsService,
    UserService,
    OrderService,
    SupplierService,
  
],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent],
})
export class AppModule { }
