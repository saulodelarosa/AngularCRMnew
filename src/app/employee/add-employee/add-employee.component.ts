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
  id:0,
  FirstName:'',
  LastName:'',
  Title:'',
  TitleOfCourtesy:'',
  BirthDate:new Date(),
  HireDate:new Date(),
  Address:'',
  City:'',
  RegionId:0,
  PostalCode:0,
  Country:0,
  Phone:'',
  ReportsTo:0,
  PhotoPath:''
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
