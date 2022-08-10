import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DeviceslistComponent } from './deviceslist/deviceslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDevicesComponent,
    DeviceslistComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DevicesModule { }
