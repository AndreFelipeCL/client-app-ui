import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';

@NgModule({
  declarations: [
    ClientsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule
  ],
  exports: [
    ClientsFormComponent
  ]
})
export class ClientsModule { }
