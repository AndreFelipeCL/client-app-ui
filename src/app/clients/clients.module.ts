import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientsListaComponent } from './clients-lista/clients-lista.component';

@NgModule({
  declarations: [
    ClientsFormComponent,
    ClientsListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule
  ],
  exports: [
    ClientsFormComponent,
    ClientsListaComponent
  ]
})
export class ClientsModule { }
