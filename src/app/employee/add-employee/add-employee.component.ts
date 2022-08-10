import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: any;
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', [Validators.required]],
      phonenumber: ['', Validators.required],
      empId: ['', Validators.required],
      role: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.employeeForm.controls;
  }

  submit() {

  }

  cancel() {

  }

}
