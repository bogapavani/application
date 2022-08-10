import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.scss']
})
export class AddDevicesComponent implements OnInit {
  devicesForm: any;
  constructor(private fb: FormBuilder) { 

    this.devicesForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deviceType: ['', [Validators.required]],
      os:['',Validators.required],
      serviceTag:['',Validators.required],
      
    })
  
  }

  ngOnInit(): void {

  }


  get f() {
    return this.devicesForm.controls;
  }

  submit() {

  }

  cancel() {

  }
}
