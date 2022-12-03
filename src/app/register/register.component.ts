import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {UsersService} from "../service/users.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor(private usersService: UserServiceService ) { }
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    firstname:new FormControl('',[
    Validators.required,
    Validators.minLength(2), 
    Validators.pattern("^[a-zA-Z]*$")]),
    lastname:new FormControl('',[
    Validators.required,
    Validators.minLength(2), 
    Validators.pattern("^[a-zA-Z]*$")]),
    username:new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20), 
    Validators.pattern("^[_a-z_A-Z_0-9_]*$")]),
    email:new FormControl('',[
    Validators.required,
    Validators.email]),
    number:new FormControl('',[
    Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10), ]),
    password:new FormControl('',[
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&^%])(?=\\S+$).{8,}$")
  ]),

  })

  registerSubmitted(){
    console.log(this.registerForm.value.firstname);
    let username:any = this.registerForm.value.username;
    let email:any = this.registerForm.value.email;
    let password: any = this.registerForm.value.password;
    let firstname:any = this.registerForm.value.firstname;
    let lastname:any = this.registerForm.value.lastname;
    let phone: any = this.registerForm.value.number;

    this.usersService.registerUser(username, email, password, firstname, lastname, phone).subscribe(res=>{})
    this.router.navigate(["/login"]);
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get UserName():FormControl{
    return this.registerForm.get("username") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Number(): FormControl{
    return this.registerForm.get("number") as FormControl;
  }
  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }

}
