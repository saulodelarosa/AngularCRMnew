import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../../interface/region';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent implements OnInit {

  regionCollection:Region[]=[]
  constructor(private regionService:RegionService, private router:Router) { }

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.regionService.getRegion().subscribe((data)=>{
      this.regionCollection=data;
    });
  }


  deleteRegion(id:any){
   this.regionService.deleteRegion(id).subscribe((d:any)=>{
    this.getData();
   });
  }


  callApi(){
    this.regionService.callApiDemo().subscribe(d=>{
      console.log(d)
    })
  }


}
