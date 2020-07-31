import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {EmployeeService} from '../service/employee.service';
import { from } from 'rxjs';
import {Router} from "@angular/router";
import { Address } from '../employee/adress.model';
import { Employee } from '../employee/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  
})
export class EmployeeFormComponent implements OnInit {
  userEntryForm = this.formBuilder.group({

    id : [null],
    name : [null,Validators.required],
    phone : [null,Validators.required],
    address: this.formBuilder.group({
      city: [null],
      address_line1 : [null],    
      address_line2 : [null],
      postal_code:[null]
    })
   
  });
  empId:number;
  constructor(private formBuilder : FormBuilder, private empservice : EmployeeService, private router : Router,private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (param) =>{
        this.empId=param.id;
        this.setEmployeeDetail();
      }
    )
  }
  onSubmit(){
    let formemp  = this.userEntryForm.value;
    this.empservice.save(formemp).subscribe(
    (data) =>{
      console.log(data);
          alert(data.id);
      this.router.navigate(['employee']);
     }

    )
  }
  setEmployeeDetail(){
    this.empservice.getBatchById(this.empId).subscribe(
      (data : Employee)=>{
        this.userEntryForm.setValue(data);
      }
    )
  }
  Edit(){
    let empdetail : Employee = this.userEntryForm.value;
    this.empservice.update(empdetail).subscribe(
      (data : Employee) =>{
        this.router.navigate(['employee']);
      }
      
    )
  }

}
