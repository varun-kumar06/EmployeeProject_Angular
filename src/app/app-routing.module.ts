import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEmployeeComponent } from './post-employee/post-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path: "post-employee", component: PostEmployeeComponent},
   {path: "employee-list", component:EmployeeListComponent},
   {path: "get-employee/:id", component:GetEmployeeComponent},
   {path: "update-employee/:id", component:UpdateEmployeeComponent},
   {path:"", redirectTo:"employee-list", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
