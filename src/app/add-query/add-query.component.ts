import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService} from "../service/admin.service";

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit {

  constructor(private adminService: AdminService,  private router: Router) { }

  queryName = "";
  queryDepartment = "";
  queryDescription = "";

  ngOnInit(): void {
    this.adminService.checkAuthenticated();
  }

  addQuery = () =>{
    console.log(this.queryName + this.queryDepartment+ this.queryDescription);
    this.adminService.addQuery(this.queryName,this.queryDepartment, this.queryDescription).subscribe(res =>{
      
    })

    this.router.navigate(["/admin"]);

  }
}
