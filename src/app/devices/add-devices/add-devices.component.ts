import { Component, ContentChildren, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';

// import { AdminhomeComponent } from './adminhome/adminhome.component';

@Component({
  selector: 'app-add-devices,/app-adminhome',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.scss'],
  // providers:['/adminhome/adminhome.component']
})
export class AddDevicesComponent implements OnInit {


  devicesForm: any;
  constructor(private fb: FormBuilder,
    private route: Router) {

    this.devicesForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deviceType: ['', [Validators.required]],
      os: ['', Validators.required],
      serviceTag: ['', Validators.required],

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

    this.route.navigate(['/devices/deviceslist']);
  }
}
