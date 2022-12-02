import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
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
}
