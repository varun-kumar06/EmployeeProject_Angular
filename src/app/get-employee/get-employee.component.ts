import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
constructor(private es: EmployeeServiceService, private route:Router, private ar:ActivatedRoute){};

id:number;
emp:Employee=new Employee();

ngOnInit(){
  this.id= this.ar.snapshot.params["id"];
  this.es.getById(this.id, this.emp).subscribe(x=>{
    this.emp=x
  });
}

}
