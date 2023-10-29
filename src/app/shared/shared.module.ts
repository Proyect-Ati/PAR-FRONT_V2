import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';




@NgModule({
  declarations: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent
  ]
})
export class SharedModule { }
