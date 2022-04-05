import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestoComponent } from '../app/add-resto/add-resto.component';
import { ListRestoComponent } from '../app/list-resto/list-resto.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

// add to the route path
const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add',
  },
  {
    component: ListRestoComponent,
    path: 'list',
  },
  {
    component: UpdateRestoComponent,
    path: 'update',
  },
  {
    component: RegisterComponent,
    path: 'register',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
];

@NgModule({
  declarations: [],
  //for importing routes
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
