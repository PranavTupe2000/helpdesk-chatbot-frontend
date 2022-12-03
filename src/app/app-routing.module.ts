import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQueryComponent } from './add-query/add-query.component';
import { AdminAllQueryComponent } from './admin-all-query/admin-all-query.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateQueryComponent } from './update-query/update-query.component';


const routes: Routes = [
  
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path:'admin' ,component:AdminAllQueryComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'add-query' ,component:AddQueryComponent},
  {path:'update-query' ,component:UpdateQueryComponent},
  {path:'chat' ,component:ChatComponent},
  {path:'home' ,component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }