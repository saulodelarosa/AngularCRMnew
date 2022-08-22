import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  proCollection:Product[]=[]
  
  constructor(private proService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getAllPro();
  }
  getAllPro(){
  this.proService.getAllProduct().subscribe(d=>{
    this.proCollection=d;
  })
  }
  editProduct(id:any){
 this.router.navigate(['product/edit/'+id]);
  }

  detail(id:any){
    this.router.navigate(['product/detail/'+id]);
     }

  deleteProduct(id:any){
    this.proService.deleteProduct(id).subscribe((d:any)=>{
     this.getAllPro();
    });
   }

}
