import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path:'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'employeelist',
    component:EmployeelistComponent
  },
  {
    path:'employeedetail',
    component:EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
