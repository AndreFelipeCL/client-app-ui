import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';

import { ClientsService } from './services/clients.service';
import { ClientsModule } from './clients/clients.module';

import { ServiceOrderService } from './services/service-order.service';
import { ServiceOrderModule } from './service-order/service-order.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceOrderModule,
    FormsModule
  ],
  providers: [
    ClientsService,
    ServiceOrderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
