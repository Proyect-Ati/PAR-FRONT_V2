import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ClientRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule { }
