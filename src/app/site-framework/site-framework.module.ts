import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[
    HeaderComponent,
    FooterComponent
  ]
})
export class SiteFrameworkModule { }
