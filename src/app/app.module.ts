import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component
//import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectComponent,
  //  LayoutModule.forRoot(adminLteConf),
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelect2Module,
    LayoutModule,
    BoxModule
  ],
  providers: [],
  bootstrap: [AppComponent,TableComponent]
})
export class AppModule { }
