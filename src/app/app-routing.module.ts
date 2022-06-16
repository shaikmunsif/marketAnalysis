import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './site-framework/default/default.component';

const routes: Routes = [
  { path: 'gainers', loadChildren: () => import('./gainers/gainers.module').then(m => m.GainersModule) },
  { path : '', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
