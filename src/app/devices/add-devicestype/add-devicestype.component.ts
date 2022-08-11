import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-devicestype',
  templateUrl: './add-devicestype.component.html',
  styleUrls: ['./add-devicestype.component.scss']
})
export class AddDevicestypeComponent implements OnInit {
  addDevicesNameForm: any;
  constructor(private fb: FormBuilder) { 
    this.addDevicesNameForm=this.fb.group({
      name:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }


  get f() {
    return this.addDevicesNameForm.controls;
  }


  submit() {

  }

  cancel() {

  }

}
