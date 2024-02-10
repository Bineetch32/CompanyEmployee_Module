import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
