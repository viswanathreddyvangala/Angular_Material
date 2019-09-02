import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule } from '@angular/material'
import { from } from 'rxjs';
import { FormtestComponent } from './formtest/formtest.component'; 
import {SampleModule} from './sample/sample.module';
import { FormtestModule } from './formtest/formtest.module'

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SampleModule,
    FormtestModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent] ,
  exports:[FormtestModule,SampleModule]
})
export class AppModule { }
