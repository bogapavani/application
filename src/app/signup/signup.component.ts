import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  employeeForm:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){
    return this.employeeForm.controls;
  }

  submit(){

  }

  cancel(){

  }

}
