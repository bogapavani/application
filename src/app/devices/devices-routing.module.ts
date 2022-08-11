import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { AddDevicestypeComponent } from './add-devicestype/add-devicestype.component';
import { DeviceslistComponent } from './deviceslist/deviceslist.component';
import { DevicestypeListComponent } from './devicestype-list/devicestype-list.component';

const routes: Routes = [
  {
    path:'add-devices',
    component:AddDevicesComponent
  },
  {
    path:'deviceslist',
    component:DeviceslistComponent
  },
  {
    path:'add-devicetype',
    component:AddDevicestypeComponent
  },
  {
    path:'devicetypelist',
    component:DevicestypeListComponent
  },
  // {
  //   path:'adminHome',
  //   component:AdminhomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
