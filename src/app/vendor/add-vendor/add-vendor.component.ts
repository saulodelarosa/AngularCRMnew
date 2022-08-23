import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Vendor } from 'src/interface/vendor';
import { Router } from '@angular/router';
import { VendorService } from '../../../services/vendor.service';


@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  vendor:Vendor ={
    id: 0,
    name: "",
    city:"",
    country:"",
    mobile: "",
    emailId: "",
    isActive: true,
  }
  isSuccessful:boolean=false;

  constructor(private vendorService:VendorService, private router:Router) { }

  ngOnInit(): void {
  }

  saveVendor(form:NgForm){
    this.vendor= form.value;
    this.vendorService.insertVendor(this.vendor).subscribe((d:any)=>{
      this.isSuccessful=true;
     });
     if(this.isSuccessful){
      this.router.navigate(['vendor/list/']);
     }
  }
  resetForm(form:NgForm){
    form.reset();
  }
}
