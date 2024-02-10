import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

console.log("Employee Module Load...")

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  
})
export class EmployeeModule { }
