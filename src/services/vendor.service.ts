import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../interface/vendor';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
url:string= environment.apiKey+environment.apiControllers.vendor;
  constructor(private httpClient:HttpClient) { }

  getAllVendor():Observable<Vendor[]>
  {
    return this.httpClient.get<Vendor[]>("https://localhost:7256/api/Vendor/GetAll");
  }
  getEmpById(id:any):Observable<Vendor>{
    return this.httpClient.get<Vendor>("https://localhost:7256/api/Vendor/GetById/"+id)
  }

  updateVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.put(this.url,vendor);
  }
  insertVendor(vendor:Vendor):Observable<any>
  {
    return this.httpClient.post(this.url,vendor);
  }

  deleteVendor(id:any):Observable<any>
  {
    //return this.httpClient.delete(this.url+id)
    return this.httpClient.delete("https://localhost:7256/api/Vendor/"+ id)
  }


}
