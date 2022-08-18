import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Region } from '../interface/region';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegionService {

   url:string =environment.apiKey+environment.apiControllers.region;
  constructor(private httpClient:HttpClient) { }

  getRegion():Observable<Region[]>
  {
   return this.httpClient.get<Region[]>("https://localhost:7256/api/Region/GetAll");
  }

  insertRegion(region:Region):Observable<any>
  {
    return this.httpClient.post(this.url,region);
  }

  deleteRegion(id:any):Observable<any>
  {
    //return this.httpClient.delete(this.url+id)
    return this.httpClient.delete("https://localhost:7256/api/Region/"+ id)
  }

  callApiDemo(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
