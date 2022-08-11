import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// AdminhomeComponent
import { DevicesRoutingModule } from './devices-routing.module';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DeviceslistComponent } from './deviceslist/deviceslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDevicestypeComponent } from './add-devicestype/add-devicestype.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//  import { AdminhomeComponent } from '../adminhome/adminhome.component';


@NgModule({
  declarations: [
    AddDevicesComponent,
    DeviceslistComponent,
    AddDevicestypeComponent,
    SidebarComponent,
    //  AdminhomeComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DevicesModule { }
