import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeService} from '../service/employee.service';
import {Employee} from "./employee.model";
import { Address } from './adress.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  emp : Employee[] =[];
  
  displayedColumns: string[] = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2','postal_code','edit'];
  dataSource: MatTableDataSource<Employee>;
  

 
  constructor( private empService : EmployeeService, private router :Router) { }
  
  ngOnInit() {
    this.getEmpList();
  }
  getEmpList():void{
    this.empService.getEmployeelist().subscribe(
      (data) =>{
        console.log(data);
        this.emp = data;
        console.log(this.emp);
        this.dataSource = new MatTableDataSource(this.emp);
      }
    )
  }

  Add(){
    this.router.navigate(['add']);
  }
  edit(id:number){
    this.router.navigate(['employee',id]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
}
