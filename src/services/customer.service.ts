import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url:string= environment.apiKey+environment.apiControllers.customer;
  constructor(private httpClient:HttpClient) { }

  getAllCustomer():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>("https://localhost:7256/api/Customer/GetAll");
  }
  getEmpById(id:any):Observable<Customer>{
    return this.httpClient.get<Customer>("https://localhost:7256/api/Customer/GetById/"+id)
  }

  updateCustomer(customer:Customer):Observable<any>{
    return this.httpClient.put(this.url,customer);
  }
  insertCustomer(customer:Customer):Observable<any>
  {
    return this.httpClient.post(this.url,customer);
  }




}
