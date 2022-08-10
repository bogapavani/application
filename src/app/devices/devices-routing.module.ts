import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DeviceslistComponent } from './deviceslist/deviceslist.component';

const routes: Routes = [
  {
    path:'add-devices',
    component:AddDevicesComponent
  },
  {
    path:'deviceslist',
    component:DeviceslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
