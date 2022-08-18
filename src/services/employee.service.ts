import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string= environment.apiKey+environment.apiControllers.employee;
  constructor(private httpClient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.url);
  }
  getEmpById(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+id)
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put(this.url,employee);
  }


}
