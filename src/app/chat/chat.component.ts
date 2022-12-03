import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private chatService: ChatService,  
    private userService: UsersService,
    private router: Router
    ) { }

  department : any;
  test: any;
  ngOnInit(): void {
    this.test = sessionStorage.getItem("username");
    this.chatService.getDepartment().subscribe(res=>{
      this.department = res
    })


}
dept:any;
getDept(){
  this.chatService.getDepartment().subscribe(res=>{
    console.log(this.dept);
    this.dept = res
})
}


Queries: any;
dep:any;
getQuery(d:any){
  console.log(d);
  this.dep=d;
  this.chatService.getQuery(d).subscribe(res=>{
    this.Queries=res
  })
}
descriptions:any;
que:any;
abc:any;
yes:any;
no:any;
getDescription(q:any){
  console.log(q)
  this.que=q;
  this.abc="any more queries?";
  this.yes="YES";
  this.no="NO";
  this.chatService.getDescription(q).subscribe(res=>{
    this.descriptions=JSON.stringify(res)
    
  })
  console.log(this.descriptions);
}
  

}
