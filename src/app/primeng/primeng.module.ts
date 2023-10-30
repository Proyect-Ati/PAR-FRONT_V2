import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollerModule } from 'primeng/scroller';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';



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
    StyleClassModule,
    GalleriaModule,
    ProgressSpinnerModule,
    ScrollerModule,
    ToolbarModule,
    FieldsetModule,
    //Angular
    FormsModule
    
  ],
  exports: [
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    MenubarModule,
    CardModule ,  
    StyleClassModule, 
    GalleriaModule,
    ProgressSpinnerModule,
    ScrollerModule,
    ToolbarModule,
    FieldsetModule,

    //Angular
    FormsModule
    
  ]
})
export class PrimengModule { }
