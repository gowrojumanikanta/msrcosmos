import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

//firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserChildComponent } from './users/user-child/user-child.component';
// import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    UserChildComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes, { useHash: false }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    MatButtonModule, 
    MatCheckboxModule
    // AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
