import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';       //Box component
//import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectComponent,
    AutoCompleteComponent,

  //  LayoutModule.forRoot(adminLteConf),
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelect2Module,
    LayoutModule,
    BoxModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent,TableComponent]
})
export class AppModule { }
