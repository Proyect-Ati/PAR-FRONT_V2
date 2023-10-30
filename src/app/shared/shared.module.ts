import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { InitialhomeComponent } from './home/initialhome/initialhome.component';




@NgModule({
  declarations: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent,
    HeaderLoginComponent,
    InitialhomeComponent,
    
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent, 
    InitialhomeComponent,
    HeaderLoginComponent
    
  ]
})
export class SharedModule { }
