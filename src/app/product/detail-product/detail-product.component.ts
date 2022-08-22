import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  id:number=0;

  product:Product ={
    id:0,
    name:"",
    supplierId:0,
    categoryId:0,
    quantityPerUnit:0,
    unitPrice:0,
    unitsInStock:0,
    unitsOnOrder:0,
    reorderLevel:0,
    discontinued:true,
    vendorId:0,
  }
  constructor(private activatedRoute:ActivatedRoute, private proService:ProductService) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    })
  }

  ngOnInit(): void {
    this.setData();
  }
 setData(){
  this.proService.getProById(this.id).subscribe(d=>{
    this.product=d;
  })
}


}
