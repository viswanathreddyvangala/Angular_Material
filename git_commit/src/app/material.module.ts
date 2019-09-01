import {NgModule} from '@angular/core'
import {MatButtonModule , 
         MatFormFieldModule ,
         MatInputModule ,
         MatDatepickerModule ,
         MatNativeDateModule 
        } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox'; 


@NgModule({
  
  imports: [MatButtonModule, MatCheckboxModule ,MatFormFieldModule ,MatInputModule ,MatDatepickerModule ,MatNativeDateModule  ],
  exports:  [MatButtonModule,MatCheckboxModule ,MatFormFieldModule ,MatInputModule , MatDatepickerModule ,MatNativeDateModule ]
})
export class MaterialModule { }  