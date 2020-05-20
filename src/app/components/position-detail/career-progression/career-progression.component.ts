import { Component, OnInit, Input, Injectable, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'career-progression',
  templateUrl: './career-progression.component.html',
  styleUrls: ['./career-progression.component.css']
})
export class CareerProgressionComponent implements OnInit,OnChanges {
  @Input() sourcePositionID;
  @Input() departmentID;
  positions = [];
  links = [];
  careerProgression = [];
  careerProgressionByCluster = [];
  clusterID;
  isLoaded=false;
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.dataSource.data = TREE_DATA;

  }

  ngOnInit() {
    console.log("sourcePositionID: ", this.sourcePositionID);
    console.log("departmentID: ", this.departmentID);
    this.isLoaded=false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        this.careerProgression = this.getChildrenBySource(this.sourcePositionID);
        console.log(this.careerProgression);
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        // this.getChildrenBySource(this.sourcePositionID);
        this.isLoaded=true;
      })
    });
  }
  ngOnChanges(){
    console.log("on change")
    this.isLoaded=false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        this.careerProgression = this.getChildrenBySource(this.sourcePositionID);
        console.log(this.careerProgression);
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        // this.getChildrenBySource(this.sourcePositionID);
        this.isLoaded=true;
      })
    });
  }
  getChildrenBySource(sourceID) {
    let childrenArr = [];
    this.links.forEach(link => {
      if (link && link["source"]["id"] == sourceID) {
        let tmp = {
          id: link["target"]["id"],
          name: this.mapPositionIDToPositionName(link["target"]["id"]),
          color: this.mapPositionIDToColor(link["target"]["id"]),
          // children: this.getChildrenBySource(link["target"])
        };
        childrenArr.push(tmp);
        console.log("sourceID: ", sourceID, "has childrenArr: ", childrenArr);
      }
    })
    return childrenArr;
  }
  mapPositionIDToPositionName(positionID) {
    let name;
    this.positions.forEach(position => {
      if (position["id"] == positionID) name = position["name"];
    })
    return name;
  }
  mapPositionIDToColor(positionID) {
    let color;
    this.positions.forEach(position => {
      if (position["id"] == positionID) color = position["careerpathObj"]["color"];
    })
    return color;
  }
  //
  gotoDetails(node) {
    let id = (node["positionID"] + "").trim();
    this.router.navigate(['/position-details', id]);
  }
  // get clusterid
  getClusterID(positionID) {
    let id;
    this.positions.forEach(position => {
      if (position["id"] == positionID) id = position["cluster"];
    })
    console.log("getClusterID: ",id);
    return id;
  }
  // get all position by cluster
  getAllPositionByCluster(clusterID) {
    let positions = [];
    this.positions.forEach(position => {
      let isCurrentPosition=position.id==this.sourcePositionID;
      if (position["clusterID"] == clusterID && !isCurrentPosition) positions.push(position);
    })
    this.careerProgressionByCluster = positions;
    console.log("getAllPositionByCluster:" ,this.careerProgressionByCluster);
  }
}

