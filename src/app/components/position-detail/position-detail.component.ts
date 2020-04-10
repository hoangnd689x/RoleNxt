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
  positionName = "";
  positionDetail: any;
  isLoaded: Boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.positionName = params['id'];
    });
    // let allPositions = this.getAllPositionDetails();
    this.dataService.getAllPositionDetails().subscribe(data => {
      this.positionDetail = this.getDetails(data);
      this.isLoaded = true;
    })
  }
  getDetails = (allPositions) => {
    let positionDetail;
    allPositions.forEach(position => {
      if (position["position"] == this.positionName)
        positionDetail = position;
    });
    return positionDetail;
  }
  backToPositions(){
    this._location.back();
  }
}
