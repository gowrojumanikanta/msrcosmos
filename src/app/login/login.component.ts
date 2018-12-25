import { Component, OnInit,Optional } from '@angular/core';
import { AuthenticationServiceService} from '../authentication-service.service';
import { FormsModule, ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage : string;
  successMessage : string;

  constructor(private toastService: ToastrService,private authService: AuthenticationServiceService,private fbb: FormBuilder ,private _router: Router,) { 
    this.loginForm = fbb.group({
  
    email: ['', Optional],
    password: ['', Optional]
    
  })
  }

  ngOnInit() {
  
  }


  tryLogin(value){

    this.toastService.success("Login Success");
    this.authService.doLogin(value)
    .then(res => {
      this.successMessage = res.message;
      console.log(" login success");
      this._router.navigate(['user']);
    }, err => {
      this.toastService.error("error");
      console.log(err);
      this.errorMessage = err.message;
    })
  }
  showSuccess() {
    console.log("sucesss");
    
    this.toastService.success('Hello world!', 'Toastr fun!');
  }

  navigate()
  {
    this._router.navigate(['register'])
  }
}
