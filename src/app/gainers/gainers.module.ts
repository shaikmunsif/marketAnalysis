import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GainersRoutingModule } from './gainers-routing.module';
import { GainersComponent } from './gainers.component';
import { ViewAllGainersComponent } from './view-all-gainers/view-all-gainers.component';
import { ViewGainersByDateComponent } from './view-gainers-by-date/view-gainers-by-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GainersComponent,
    ViewAllGainersComponent,
    ViewGainersByDateComponent
  ],
  imports: [
    CommonModule,
    GainersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GainersModule { }
