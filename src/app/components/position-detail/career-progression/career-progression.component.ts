import { Component, OnInit, Input, Injectable, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'career-progression',
  templateUrl: './career-progression.component.html',
  styleUrls: ['./career-progression.component.css']
})
export class CareerProgressionComponent implements OnInit, OnChanges {
  @Input() sourcePositionID;
  @Input() departmentID;
  positions = [];
  links = [];
  careerProgression = [];
  careerProgressionByCluster = [];
  clusterID;
  isLoaded = false;
  childrenArr = [];
  connection = [];
  nodes: Node[];
  edges: Edge[];
  clusters = [];
  public layoutSettings = {
    orientation: "BT",
  }
  layout: String | Layout = 'dagreCluster';
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    console.log("sourcePositionID: ", this.sourcePositionID);
    console.log("departmentID: ", this.departmentID);
    this.connection=[];
    this.isLoaded = false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        let tmp = this.getAllChildrenBySource(this.sourcePositionID).split(",");
        this.childrenArr = tmp.filter((node, index) => {
          return tmp.indexOf(node) === index && node != "";
        })
        this.nodes = this.getAllNodes();
        this.edges = Array.from(new Set(this.getAllLinks()));
        // console.log("childrenArr: ", this.childrenArr);

        this.isLoaded = true;
      })
    });
  }
  ngOnChanges() {
    console.log("on change")
    // reset data
    this.nodes = [];
    this.edges = [];
    this.connection=[];
    this.isLoaded = false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        let tmp = this.getAllChildrenBySource(this.sourcePositionID).split(",");
        this.childrenArr = tmp.filter((node, index) => {
          return tmp.indexOf(node) === index && node != "";
        })
        this.nodes = this.getAllNodes();
        this.edges = Array.from(new Set(this.getAllLinks()));
        // console.log("childrenArr: ", this.childrenArr);
        this.isLoaded = true;
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
          children: this.getChildrenBySource(link["target"]["id"])
        };
        childrenArr.push(tmp);
        // console.log("sourceID: ", sourceID, "has childrenArr: ", childrenArr);
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
    // console.log("getClusterID: ", id);
    return id;
  }
  // get all position by cluster
  getAllPositionByCluster(clusterID) {
    let positions = [];
    this.positions.forEach(position => {
      let isCurrentPosition = position.id == this.sourcePositionID;
      if (position["clusterID"] == clusterID && !isCurrentPosition) positions.push(position);
    })
    this.careerProgressionByCluster = positions;
    // console.log("getAllPositionByCluster:", this.careerProgressionByCluster);
  }
  getAllChildrenBySource(sourceID) {
    let id = "";
    let s = ",";
    this.links.forEach(link => {
      if (link && link["source"]["id"] == sourceID) {
        id = link["target"]["id"];
        this.connection.push(link);
        // console.log("source: " + sourceID + " des: " + id + " found")
        s = s + sourceID + "," + this.getAllChildrenBySource(id) + ",";
      }
    });
    return s + "," + sourceID + ",";
  }
  getAllNodes() {
    let arr = this.childrenArr.map(id => {
      let node: Node = {
        id: id,
        label: this.mapPositionIDToPositionName(id),
        dimension: {
          width: 850,
          height: 200
        },
        data: {
          customColor: this.mapPositionIDToColor(id)
        }
      }
      return node;
    });
    return arr;
  }
  getAllLinks() {
    return Array.from(new Set(this.connection)).map(conn => {
      let edge: Edge = {
        id: "e" + conn["id"],
        source: conn["source"]["id"],
        target: conn["target"]["id"],
      }
      return edge;
    })
  }

  view = [500, 300];
  onResize(event) {
    this.view = [event.target.innerWidth - 900, 280];
  }

}

