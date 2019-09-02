import { async, ComponentFixture, TestBed, flush } from '@angular/core/testing';

import { FormtestComponent } from './formtest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { MatFormFieldModule ,
  MatDatepickerModule ,
  MatNativeDateModule ,
  MatInputModule} from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


fdescribe('FormtestComponent', () => {
  let component: FormtestComponent;
  let fixture: ComponentFixture<FormtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtestComponent ],
      imports:[FormsModule , ReactiveFormsModule , BrowserAnimationsModule ,MatFormFieldModule,   MatDatepickerModule ,
        MatNativeDateModule ,
        MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check validity of form ', () => { 
    // let itname = component.rform.controls['name']
    //   itname.setValue('nameitself')
    //   let itdate = component.rform.controls['date']
    //   itdate.setValue(new Date('1/5/2019')) 

    component.rform.patchValue({
      'email':"somerandometextgmail.com",
      'password':"xysdsd",
      'date':new Date()
    })
    flush();
    console.log(component.rform)
     expect( component.rform.valid).toBeTruthy();
  }); 
});ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS
