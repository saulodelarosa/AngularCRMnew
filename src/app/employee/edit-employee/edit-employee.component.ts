import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id:number=0;
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
  true:boolean = true;

  
  constructor(private activatedRoute:ActivatedRoute, private empService:EmployeeService, private router:Router) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    });
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
  this.employee.id = this.id;
  this.empService.updateEmployee(this.employee).subscribe(d=>{
    this.isSuccessful = true;
  });

  if(this.isSuccessful){
    this.router.navigate(['employee/list/']);
   }

}

resetPage(form:NgForm){
  form.reset();
}


}
