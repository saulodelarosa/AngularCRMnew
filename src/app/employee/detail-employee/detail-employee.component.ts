import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {

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
    this.setData();
  }


 setData(){
  this.empService.getEmpById(this.id).subscribe(d=>{
    this.employee=d;
  })
}

}
