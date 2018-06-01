import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [ClientsListComponent]
})
export class ClientsModule { }
