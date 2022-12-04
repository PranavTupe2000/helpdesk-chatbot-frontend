import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {AdminService} from "../service/admin.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

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
    console.log("This");
    
    this.adminService.adminLogin(this.loginForm.value.username, this.loginForm.value.password).subscribe(res =>{
      const msg = JSON.parse(JSON.stringify(res)).message;
      console.log(msg);
      
      if (msg == "Success"){
        sessionStorage.setItem("admin",this.loginForm.value.username || "")
        this.router.navigate(["/admin"]);
      } else if(msg == "Failed"){
      }
      
      
      
    });
  }

  get UserName():FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password():FormControl{
    return this.loginForm.get("password") as FormControl;
  }

}
