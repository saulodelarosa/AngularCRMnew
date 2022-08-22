import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../interface/employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  empCollection:Employee[]=[]
  constructor(private empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEmps();
  }
  getAllEmps(){
  this.empService.getAllEmployee().subscribe(d=>{
    this.empCollection=d;
  })
  }
  editEmployee(id:any){
 this.router.navigate(['employee/edit/'+id]);
  }

  deleteEmployee(id:any){
   this.empService.deleteEmployee(id).subscribe((d:any)=>{
    this.getAllEmps();
   });
  }

  detail(id:any){
    this.router.navigate(['employee/detail/'+id]);
     }


}
