import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DownlaodComponent } from './downlaod/downlaod.component';
import { TableComponent } from './table/table.component';
import { Router } from './app.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Explicitly written Bootstrap Module
import { AppBootstrapModule } from "./app.bootstrap.module";

@NgModule({
  declarations: [
    AppComponent,
    DownlaodComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    Router
  ],
  providers: [
    {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
