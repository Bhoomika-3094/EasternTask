import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeFormComponent} from '../app/employee-form/employee-form.component'
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'add',component:EmployeeFormComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
