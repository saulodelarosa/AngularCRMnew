import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../interface/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
employee:Employee ={
  firstName: '',
  lastName:'',
  fullName:'',
  city:'',
  title:'',
  hireDate:new Date(),
  birthDate:new Date(),
  region:0,
  reportsTo:0,
  titleOfCourtesy:'',
regionName:'',
id:0
}
  constructor() { }

  ngOnInit(): void {
  }

  insertEmployee(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
