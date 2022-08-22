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
    return this.httpClient.get<Product[]>("https://localhost:7256/api/Product/GetAll");
  }
  getProById(id:any):Observable<Product>{
    return this.httpClient.get<Product>("https://localhost:7256/api/Product/GetById/"+id)
  }

  updateProduct(product:Product):Observable<any>{
    return this.httpClient.put(this.url,product);
  }

  insertProduct(product:Product):Observable<any>
  {
    return this.httpClient.post(this.url,product);
  }

  deleteProduct(id:any):Observable<any>
  {
    //return this.httpClient.delete(this.url+id)
    return this.httpClient.delete("https://localhost:7256/api/Product/"+ id)
  }
}
