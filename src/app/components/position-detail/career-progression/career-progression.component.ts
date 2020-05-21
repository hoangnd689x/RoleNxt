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
  public layoutSettings = {
    orientation: "BT",
  }
  layout: String | Layout = 'dagreCluster';
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.dataSource.data = TREE_DATA;

  }

  ngOnInit() {
    console.log("sourcePositionID: ", this.sourcePositionID);
    console.log("departmentID: ", this.departmentID);
    this.isLoaded = false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        // this.careerProgression = this.getChildrenBySource(this.sourcePositionID);
        console.log(this.careerProgression);
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        // this.getChildrenBySource(this.sourcePositionID);
        this.childrenArr = this.getAllChildrenBySource(this.sourcePositionID).split(",");
        this.nodes = this.getAllNodes();
        this.edges = Array.from(new Set(this.getAllLinks()));
        console.log("hahaha: nodes: ", this.nodes);
        console.log("hahaha: links: ", this.edges);
        this.isLoaded = true;
      })
    });
  }
  ngOnChanges() {
    console.log("on change")
    this.isLoaded = false;
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        // this.careerProgression = this.getChildrenBySource(this.sourcePositionID);
        console.log(this.careerProgression);
        this.clusterID = this.getClusterID(this.sourcePositionID);
        this.getAllPositionByCluster(this.clusterID);
        // this.getChildrenBySource(this.sourcePositionID);
        this.childrenArr = this.getAllChildrenBySource(this.sourcePositionID).split(",");
        this.nodes = this.getAllNodes();
        this.edges = Array.from(new Set(this.getAllLinks()));
        console.log("hahaha: nodes: ", this.nodes);
        console.log("hahaha: links: ", this.edges);
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
    console.log("getClusterID: ", id);
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
    console.log("getAllPositionByCluster:", this.careerProgressionByCluster);
  }
  getAllChildrenBySource(sourceID) {
    // let childrenArr = [];
    // this.links.forEach(link => {
    //   if (link && link["source"]["id"] == sourceID) {
    //     let node: Node = {
    //       id: link["target"]["id"],
    //       label: link["target"]["name"],
    //       dimension: {
    //         width: 1600,
    //         height: 400
    //       },
    //       data: {
    //         customColor: link["source"]["careerpathObj"]["color"]
    //       }
    //     };
    //     childrenArr.push(node);
    //     console.log("haha children for ", link["target"]["id"], this.getAllChildrenBySource(link["target"]["id"]));
    //     let childrendNode = this.getAllChildrenBySource(link["target"]["id"]);
    //     childrendNode.forEach(node => {
    //       // if (childrenArr.indexOf(node) == -1) childrenArr.push(node);
    //       let found = false;
    //       for (let i = 0; i < childrenArr.length; i++) {
    //         if (childrenArr[i].name == node["name"]) {
    //           found = true;
    //           break;
    //         }
    //       }
    //       if(!found) childrenArr.push(node);
    //     })
    //   }
    // })
    // return childrenArr;
    let id = "";
    let found = false;
    this.links.forEach(link => {
      if (link && link["source"]["id"] == sourceID) {
        // arr.push(link["target"]["id"]);
        id = link["target"]["id"];
        found = true;
        this.connection.push(link);
        console.log("source: " + sourceID + " des: " + id + " found")
      }
    });
    return found ? sourceID + "," + this.getAllChildrenBySource(id) : sourceID;
  }

  // getPositions(result): void {
  //   this.nodes = result.map(position => {
  //     let isMemberEngineering = position["name"].indexOf("Member engineer") != -1;
  //     let node: Node = {
  //       id: position["id"] + '',
  //       label: position["name"],
  //       // meta: position["careerpathObj"]["name"],
  //       dimension: {
  //         width: isMemberEngineering ? 2800 : 1600,
  //         height: isMemberEngineering ? 400 : 400
  //       },
  //       data: {
  //         customColor: isMemberEngineering ? "#08427E" : position["careerpathObj"]["color"]
  //       }
  //     }
  //     return node;
  //   });
  // }
  getAllNodes() {
    let arr = this.childrenArr.map(id => {
      let node: Node = {
        id: id,
        label: this.mapPositionIDToPositionName(id),
        dimension: {
          width: 800,
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
  getAllLinks(){
    return Array.from(new Set(this.connection)).map(conn=>{
      let edge:Edge={
        id:"e"+conn["id"],
        source:conn["source"]["id"],
        target:conn["target"]["id"],
      }
      return edge;
    })
  }
}

