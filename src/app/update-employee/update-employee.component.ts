import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private es:EmployeeServiceService, private route : Router, private ar: ActivatedRoute){ };
  id: number;
  emp : Employee= new Employee();

  ngOnInit() {
    this.id=this.ar.snapshot.params["id"];
this.es.getById(this.id, this.emp).subscribe(x=>{
    this.emp=x
    });
  }

  sub(id: number, emp:Employee){
    this.es.updateEmp(this.id, this.emp).subscribe(x=>{alert("Updated")});
  }

back(){
  this.route.navigate(["employee-list"]);
 }
}
