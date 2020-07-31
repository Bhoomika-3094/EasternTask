import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  getEmployeelist():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:3000/data")
  }
  save(employee : Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>("http://localhost:3000/data",employee);
  }
  getBatchById(id  :number) : Observable<Employee>{
    return this.httpClient.get<Employee>("http://localhost:3000/data"+"/"+id);
  }
  
  update(employee : Employee) : Observable<Employee>{
    return this.httpClient.put<Employee>("http://localhost:3000/data"+"/"+employee.id,employee);
  }
}
