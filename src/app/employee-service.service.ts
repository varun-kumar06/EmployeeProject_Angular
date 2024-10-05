import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { };
  baseUrl="http://localhost:8080/Employee";

  getAllEmps(){
    return this.http.get<Employee[]>(`${this.baseUrl}/getAll`)
  }

  postEmp(emp:Employee){
    return this.http.post<Employee>(`${this.baseUrl}/postAll`,emp);
  }

  updateEmp(id:number,emps:Employee){
    return this.http.put<Employee>(`${this.baseUrl}/updateAll/${id}`,emps);
  }

  deleteById(id:number){
return this.http.delete<Employee>(`${this.baseUrl}/deleteAll/${id}`);
  }

  getById(id: number, emps: Employee){
    return this.http.get<Employee>(`${this.baseUrl}/getById/${id}`);
  }


}
