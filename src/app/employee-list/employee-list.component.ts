import { Component, OnChanges, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private es : EmployeeServiceService, private route: Router){ };

  emp:Employee[]=[];

  getAll(){
    this.es.getAllEmps().subscribe(x=>{this.emp=x})
  }

ngOnInit() {
  this.getAll();
}

create(){
  this.route.navigate(['post-employee']);
}

update(id : number){
  this.route.navigate(['update-employee', id]);
}

createView(id:number){
  this.route.navigate(['get-employee', id]);
}

deleteEmp(id:number){
  this.es.deleteById (id).subscribe(x=>{
    this.getAll(), alert("deleted");
  })
}

}
