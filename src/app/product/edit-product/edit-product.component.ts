import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id:number=0;

  product:Product ={
    Name:"",
    SupplierId:0,
    CategoryId:0,
    QuantityPerUnit:0,
    UnitPrice:0,
    UnitsInStock:0,
    UnitsOnOrder:0,
    ReorderLevel:0,
    Discontinued:0,
    VendorId:0,
    Id:0
  }
  constructor(private activatedRoute:ActivatedRoute, private empService:ProductService) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    })
  }

  ngOnInit(): void {
  }
 setData(ngForm:NgForm){
  this.empService.getEmpById(this.id).subscribe(d=>{
    this.product=d;
  })
 ngForm.setValue(this.product)
 
}
editProduct(ngForm:NgForm)
{
  this.product= ngForm.value;
  this.empService.updateProduct(this.product).subscribe(d=>{

  });
}

}
