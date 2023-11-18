import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { StyleClassModule } from 'primeng/styleclass';
import { AnimateModule } from 'primeng/animate';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollerModule } from 'primeng/scroller';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    MenubarModule,
    CardModule,  
    StyleClassModule,
    GalleriaModule,
    CarouselModule,
    AnimateModule,
    DividerModule,
    ProgressSpinnerModule,
    ScrollerModule,
    ToolbarModule,
    FieldsetModule,
    InputTextModule,
    //Angular
    FormsModule
  ],
})
export class PrimengModule { }
