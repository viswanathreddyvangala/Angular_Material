import { Component, OnInit } from '@angular/core'; 
import {FormsModule , ReactiveFormsModule ,  Validators , FormGroup , FormBuilder} from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';


@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {
  rform : FormGroup
  constructor(private fb : FormBuilder) { 

    this.rform = fb.group({
      'email':['',Validators.required],
      'password':['' ,Validators.required],
      'date':['',Validators.required]
    })
   }

  ngOnInit() {
  }

}
