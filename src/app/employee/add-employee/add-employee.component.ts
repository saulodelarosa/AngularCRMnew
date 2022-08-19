import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
employee:Employee ={
  id:0,
  firstName:'',
  lastName:'',
  title:'',
  titleOfCourtesy:'',
  birthDate:new Date(),
  hireDate:new Date(),
  address:'',
  city:'',
  regionId:0,
  postalCode:0,
  country:'',
  phone:'',
  reportsTo:0,
  photoPath:''
}
isSuccessful:boolean=false;

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(form:NgForm){
    this.employee= form.value;
    this.employeeService.insertEmployee(this.employee).subscribe((d:any)=>{
      this.isSuccessful=true;
     });
     if(this.isSuccessful){
      this.router.navigate(['employee/list/']);
     }
  }
  resetPage(form:NgForm){
    form.reset();
  }
}
