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
    return this.httpClient.get<Employee[]>("https://localhost:7256/api/Employee/GetAll");
  }
  getEmpById(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>("https://localhost:7256/api/Employee/GetById/"+id)
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put(this.url,employee);
  }
  insertEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post(this.url,employee);
  }

  deleteEmployee(id:any):Observable<any>
  {
    //return this.httpClient.delete(this.url+id)
    return this.httpClient.delete("https://localhost:7256/api/Employee/"+ id)
  }


}
