import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
  ],
  exports: [
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule
  ]
})
export class PrimengModule { }
