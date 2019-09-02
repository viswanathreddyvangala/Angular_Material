import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormtestComponent} from './formtest.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { 
  MatFormFieldModule ,
  MatButtonModule ,
  MatDatepickerModule ,
  MatNativeDateModule,  
  MatInputModule} from '@angular/material'
@NgModule({
  declarations: [FormtestComponent ],
  imports: [
    CommonModule ,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule ,
    MatNativeDateModule ,
    MatInputModule
  ],
  exports:[FormtestComponent,  MatFormFieldModule,
    MatDatepickerModule ,
    MatNativeDateModule ,
    MatInputModule,MatButtonModule]
})
export class FormtestModule { }
