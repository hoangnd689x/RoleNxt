import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {
  positionID = "";
  positionDetail: any;
  isLoaded: Boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.positionID = params['id'];
    });
    // let allPositions = this.getAllPositionDetails();
    this.dataService.getRoleById(this.positionID).subscribe(data => {
      this.positionDetail = data;
      console.log(this.positionDetail)
      this.isLoaded = true;
    })
  }
  backToPositions(){
    this._location.back();
  }
}
