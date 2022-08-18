import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id:number=0;
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
  
  constructor(private activatedRoute:ActivatedRoute, private empService:EmployeeService) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    })
  }

  ngOnInit(): void {
  }
 setData(ngForm:NgForm){
  this.empService.getEmpById(this.id).subscribe(d=>{
    this.employee=d;
  })
 ngForm.setValue(this.employee)
 
}
editEmployee(ngForm:NgForm)
{
  this.employee= ngForm.value;
  this.empService.updateEmployee(this.employee).subscribe(d=>{

  });
}
}
