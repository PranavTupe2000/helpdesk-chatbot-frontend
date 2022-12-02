import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

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

  deleteQuery(id: string){
    return this.http.delete("http://localhost:8088/admin/delete/" + id);
  }
}
