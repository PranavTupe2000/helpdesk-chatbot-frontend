import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10), 
      Validators.pattern("^[_a-z_A-Z_0-9_]*$")]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&^%])(?=\\S+$).{8,}$")]),
    
  })

  loginSubmitted(){
    console.log(this.loginForm);
  }

  get UserName():FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password():FormControl{
    return this.loginForm.get("password") as FormControl;
  }

}
