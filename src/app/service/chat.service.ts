import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getDepartment(){
    return this.http.get("http://localhost:8088/query/department");
  }

  getQuery(d:any){
    return this.http.get(`http://localhost:8088/query/name/${d}`);
  }
  getDescription(q:any){
    return this.http.get(`http://localhost:8088/query/description/${q}`,{

      responseType:'text'

    }    

    );;
  }
}
