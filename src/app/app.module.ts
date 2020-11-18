import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientsService } from './services/clients.service';
import { ClientsModule } from './clients/clients.module';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';


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
    ClientsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
