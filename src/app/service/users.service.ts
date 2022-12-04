import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router :Router) { }

  checkAuthenticated(){
    if(sessionStorage.getItem("username") == null){
      console.log("Not Authenticated");
      this.router.navigate(["/login"]);
    }else{
      console.log("Authenticated");
    }
  }

  registerUser(username: string, email:string, password: string, firstname: string, lastname: string, phone: string){
    const body = {
      "username": username,
      "email": email,
      "password": password,
      "firstname": firstname,
      "lastname": lastname,
      "phone": phone
    }
    return this.http.post("http://localhost:8088/user/register",body);
  }

  loginUser(username: any, password: any){
    console.log("From service: " + username + password);
    const body = {
      "username": username,
      "password": password
    }
    return this.http.post("http://localhost:8088/user/login",body);
  }

  logoutUser(){
    sessionStorage.removeItem("username")
  }
}
