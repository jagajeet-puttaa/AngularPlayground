import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomPasswordValidationService } from '../services/passwordvalidationService/custom-password-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor( 
    private fb : FormBuilder,
    private passwordValidator : CustomPasswordValidationService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required,Validators.minLength(8)]]
    },{
      validator: this.passwordValidator.passwordMatchValidator("password","confirmPassword")
    })
  }

  submit(): void{
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  get emailControl(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  get confirmPasswordControl(): FormControl{
    return this.loginForm.get('confirmPassword') as FormControl;
  }

}
