import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' 
import {FormControl , Validators} from '@angular/forms'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password =  new FormControl('', [Validators.required]);
  // date =  new FormControl('', [Validators.required]);


  onSubmit(form: NgForm){
     console.log(form)
  }
}
