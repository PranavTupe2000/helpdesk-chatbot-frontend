import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
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
    console.log(username + password);
    
  }
}
