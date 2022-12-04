import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService} from "../service/admin.service";

@Component({
  selector: 'app-update-query',
  templateUrl: './update-query.component.html',
  styleUrls: ['./update-query.component.css']
})
export class UpdateQueryComponent implements OnInit {

  constructor(private adminService : AdminService,  private router: Router) { }

  id :any
  name = ""
  department = ""
  description = ""

  data:any
  ngOnInit(): void {
    this.adminService.checkAuthenticated();
    this.id = this.adminService.getOption()['id']
    this.name = this.adminService.getOption()['name']
    this.department = this.adminService.getOption()['department']
    this.description = this.adminService.getOption()['description']
    
  }

  updateQuery(){
    this.adminService.updateQuery(this.id,this.name,this.department,this.description).subscribe(res =>{})
    this.router.navigate(["/admin"]);
  }

}
