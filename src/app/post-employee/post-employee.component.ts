import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent {
  constructor(private es:EmployeeServiceService, private route:Router){ };

  emp : Employee= new Employee();

  post(){
    this.es.postEmp(this.emp).subscribe(x=>alert("Saved"));
  }

  back(){
   this.route.navigate(["employee-list"]);
  }
}
