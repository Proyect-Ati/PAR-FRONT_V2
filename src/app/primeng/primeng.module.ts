import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    MenubarModule,
    CardModule,
    MenubarModule ,
    StyleClassModule 
  ],
  exports: [
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    MenubarModule,
    CardModule ,  
    StyleClassModule  , 
  ]
})
export class PrimengModule { }
