import { Component, OnInit, Optional } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  userGuid: string;
  registerForm: FormGroup;

  constructor(private _router: Router,private authService: AuthenticationServiceService, private fb: FormBuilder, private registerService: RegistrationService) {
    this.registerForm = fb.group({
      // $key: ['', Optional],
      FirstName: ['', Optional],
      MiddleName: ['', Optional],
      LastName: ['', Optional],
      Mobile: ['', Optional],
      email: ['', Optional],
      password: ['', Optional],
      password1: ['', Optional],
    })
  }

  ngOnInit() {
  }

  tryRegister(value) {
    if (value.FirstName != "" && value.LastName != "" && value.email != "") {
      if (value.password != value.password1) {
        this.errorMessage = "Password doesnot match"
      }
      else{
        this.authService.doRegister(value)
        .then(res => {
          console.log(res);
          this.errorMessage = "";
          this.successMessage = "Your account has been created";
          this._router.navigate(['login']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = "";
        })
      }
     
    }


    else {
      this.errorMessage = "please fill all fields"
    }

  }

}
