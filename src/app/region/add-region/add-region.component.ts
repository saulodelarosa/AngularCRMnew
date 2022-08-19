import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from '../../../interface/region';
import { RegionService } from '../../../services/region.service';
import { RegionModule } from '../region.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  addRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }
  isSuccessful:boolean=false;
  
 
  constructor(private builder:FormBuilder, private regionService:RegionService, private router:Router) {
    this.addRegionForm= builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)])
    });

   }

  ngOnInit(): void {
    
  }
  saveRegion(){
     this.region.id= 0
     this.region.name= this.addRegionForm.value["regionName"];
     this.regionService.insertRegion(this.region).subscribe((d:any)=>{
      this.isSuccessful=true;
     });

     if(this.isSuccessful){
      this.router.navigate(['region/list/']);
     }
    
  }

}
