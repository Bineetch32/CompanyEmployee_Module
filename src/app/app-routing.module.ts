import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerRoutes } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path:"", redirectTo:'home', pathMatch:'full'},
{path:"home", component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'login/register', component: RegisterComponent},
{path:'login/header', component:HeaderComponent,children:headerRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
