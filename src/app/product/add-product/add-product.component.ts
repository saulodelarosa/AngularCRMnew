import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product:Product ={
    Name: "",
    SupplierId: NaN,
    CategoryId: NaN,
    QuantityPerUnit: NaN,
    UnitPrice: NaN,
    UnitsInStock: NaN,
    UnitsOnOrder: NaN,
    ReorderLevel: NaN,
    Discontinued: NaN,
    VendorId: NaN,
    Id: NaN
  }


  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(ProductForm:NgForm){
    console.log(ProductForm)
  }

  resetForm(ProductForm:NgForm){
    ProductForm.reset();
  }

}
