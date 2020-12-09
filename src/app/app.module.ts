import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';

import { ClientsService } from './services/clients.service';
import { ClientsModule } from './clients/clients.module';

import { ServiceOrderService } from './services/service-order.service';
import { ServiceOrderModule } from './service-order/service-order.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceOrderModule
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
