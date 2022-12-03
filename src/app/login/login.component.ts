import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    username:new FormControl('',[
      Validators.required,
      // Validators.minLength(10),
      // Validators.maxLength(10), 
      // Validators.pattern("^[_a-z_A-Z_0-9_]*$")
    ]),
      password:new FormControl('',[
        Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(10),
        // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&^%])(?=\\S+$).{8,}$")
      ]),
    
  })


  loginSubmitted(){
    this.usersService.loginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(res =>{
      const msg = JSON.parse(JSON.stringify(res)).message;
      if (msg == "Success"){
        this.usersService.setAuth(true);
        sessionStorage.setItem("username",this.loginForm.value.username || "")
        this.router.navigate(["/chat"]);
      } else if(msg == "Failed"){
        this.usersService.setAuth(false);
      }
      console.log(this.usersService.getAuth());
      
      
    });
  }

  get UserName():FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password():FormControl{
    return this.loginForm.get("password") as FormControl;
  }

}
