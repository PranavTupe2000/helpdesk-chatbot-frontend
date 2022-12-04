import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router :Router) { }
  private data:any = {};  
  
  setOption(option:any, value: any) {      
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  
  
  getData(){
    return this.http.get("http://localhost:8088/admin/all");
  }

  addQuery(name: string, department: string, description: string){
    const body = {
      "name": name,
      "department": department,
      "description": description
    }
    return this.http.post("http://localhost:8088/admin/add",body);
  }

  updateQuery(id:any, name: string, department: string, description: string){
    const body = {
      "id": id,
      "name": name,
      "department": department,
      "description": description
    };
    return this.http.put("http://localhost:8088/admin/update", body);
  }
  deleteQuery(id: string){
    return this.http.delete("http://localhost:8088/admin/delete/" + id);
  }

  adminLogin(username: any, password: any){
    const body = {
      "username": username,
      "password": password
    }
    return this.http.post("http://localhost:8088/admin/login",body);
  }

  logoutAdmin(){
    sessionStorage.removeItem("admin")
  }

  checkAuthenticated(){
    if(sessionStorage.getItem("admin") == null){
      console.log("Not Authenticated");
      this.router.navigate(["/admin-login"]);
    }else{
      console.log("Authenticated");
    }
  }
}
