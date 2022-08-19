import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';


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

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(form:NgForm){
    this.employee= form.value;
    this.employeeService.insertEmployee(this.employee).subscribe((d:any)=>{
      this.isSuccessful=true;
     });
  }
  resetPage(form:NgForm){
    form.reset();
  }
}
