import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SiteFrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
