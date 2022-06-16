import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainersComponent } from './gainers.component';
import { ViewAllGainersComponent } from './view-all-gainers/view-all-gainers.component';
import { ViewGainersByDateComponent } from './view-gainers-by-date/view-gainers-by-date.component';

const routes: Routes = [
  { path: '', component: GainersComponent },
  { path: 'view-all-gainers', component: ViewAllGainersComponent },
  { path: 'view-gainers-by-date', component: ViewGainersByDateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GainersRoutingModule {}
