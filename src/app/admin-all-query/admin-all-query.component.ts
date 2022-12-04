import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService} from "../service/admin.service";

@Component({
  selector: 'app-admin-all-query',
  templateUrl: './admin-all-query.component.html',
  styleUrls: ['./admin-all-query.component.css']
})
export class AdminAllQueryComponent implements OnInit {

  constructor(private adminService: AdminService,  private router: Router) { }
  allData : any
  
  ngOnInit(): void {
    this.adminService.checkAuthenticated();
    this.adminService.getData().subscribe(res=>{
      this.allData = res
    })
  }

  editQuery(id:any, name:string, department:string, description: string){
    this.adminService.setOption("id",id);
    this.adminService.setOption("name",name);
    this.adminService.setOption("department",department);
    this.adminService.setOption("description",description);

    this.router.navigate(["/update-query"]);
  }

  deleteQuery(id: string){
    this.adminService.deleteQuery(id).subscribe(res=>{
      // this.router.navigate(["/admin"]);
    });
    location.reload();
  }

  toAddQuery(){
    this.router.navigate(["/add-query"]);
  }

  logoutAdmin(){
    this.adminService.logoutAdmin();
    this.router.navigate(["/"]);
  }
}
