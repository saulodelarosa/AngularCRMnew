import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/interface/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product:Product ={
    id: 0,
    name: "",
    supplierId: NaN,
    categoryId: NaN,
    quantityPerUnit: NaN,
    unitPrice: NaN,
    unitsInStock: NaN,
    unitsOnOrder: NaN,
    reorderLevel: NaN,
    discontinued: true,
    vendorId: NaN,
    
  }
  isSuccessful:boolean=false;

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  saveProduct(form:NgForm){
    this.product= form.value;
    this.productService.insertProduct(this.product).subscribe((d:any)=>{
      this.isSuccessful=true;
     });
     if(this.isSuccessful){
      this.router.navigate(['product/list/']);
     }
  }
  resetForm(form:NgForm){
    form.reset();
  }
}
