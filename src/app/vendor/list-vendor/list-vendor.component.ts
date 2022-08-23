import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../interface/vendor';
import { VendorService } from '../../../services/vendor.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {

  empCollection:Vendor[]=[]
  constructor(private empService:VendorService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEmps();
  }
  getAllEmps(){
  this.empService.getAllVendor().subscribe(d=>{
    this.empCollection=d;
  })
  }
  editVendor(id:any){
 this.router.navigate(['vendor/edit/'+id]);
  }

  deleteVendor(id:any){
   this.empService.deleteVendor(id).subscribe((d:any)=>{
    this.getAllEmps();
   });
  }

  detail(id:any){
    this.router.navigate(['vendor/detail/'+id]);
     }


}
