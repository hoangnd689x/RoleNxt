import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {
  positionID = "";
  positionDetail: any;
  isLoaded: Boolean = false;
  paramsSubscription : Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.positionID = params['id'];
    });
    // let allPositions = this.getAllPositionDetails();
    this.dataService.getRolesByPositionId(this.positionID).subscribe(data => {
      this.positionDetail = data;
      console.log(this.positionDetail)
      this.isLoaded = true;
    })
  }
  ngOnDestroy() {
    console.log("Component will be destroyed");
    this.paramsSubscription.unsubscribe();
  }
  backToPositions(){
    this._location.back();
  }
}
