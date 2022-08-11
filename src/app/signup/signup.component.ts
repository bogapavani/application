import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  constructor(private fb:FormBuilder) {
    this.signupForm=this.fb.group({
      username:[''],
      password:[''],
      confirmpassword:['']
    })
   }

  ngOnInit(): void {
  }

  get f(){
    return this.signupForm.controls;
  }

  submit(){

  }

  cancel(){

  }

}
