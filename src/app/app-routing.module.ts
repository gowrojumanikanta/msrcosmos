import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [

   { path: '', redirectTo:'login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegistrationComponent },
   { path: 'user', component: UsersComponent}

 ];

