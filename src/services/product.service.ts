import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string= environment.apiKey+environment.apiControllers.product;
  constructor(private httpClient:HttpClient) { }

  getAllProduct():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.url);
  }
  getEmpById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.url+id)
  }

  updateProduct(product:Product):Observable<any>{
    return this.httpClient.put(this.url,product);
  }

  insertProduct(product:Product):Observable<any>
  {
    return this.httpClient.post(this.url,product);
  }
}
