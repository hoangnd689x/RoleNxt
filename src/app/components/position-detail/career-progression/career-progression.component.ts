import { Component, OnInit, Input, Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  id: string;
  name: string;
  color: string;
  children?: FoodNode[];
}

let TREE_DATA: FoodNode[] = [
  // {
  //   name: 'Fruit',
  //   children: [
  //     { name: 'Apple' },
  //     { name: 'Banana' },
  //     { name: 'Fruit loops' },
  //   ]
  // }, {
  //   name: 'Vegetables',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [
  //         { name: 'Broccoli' },
  //         { name: 'Brussels sprouts' },
  //       ]
  //     }, {
  //       name: 'Orange',
  //       children: [
  //         { name: 'Pumpkins' },
  //         { name: 'Carrots' },
  //       ]
  //     },
  //   ]
  // },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  positionID: string;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'career-progression',
  templateUrl: './career-progression.component.html',
  styleUrls: ['./career-progression.component.css']
})
export class CareerProgressionComponent implements OnInit {
  @Input() sourcePositionID;
  @Input() departmentID;
  positions = [];
  links = [];
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      positionID: node.id,
      color: node.color,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private dataService: DataService) {
    // this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    console.log("sourcePositionID: ", this.sourcePositionID);
    console.log("departmentID: ", this.departmentID);

    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
      this.positions = result;
      this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(result => {
        this.links = result;
        TREE_DATA = this.getChildrenBySource(this.sourcePositionID);
        this.dataSource.data = TREE_DATA;
        console.log(TREE_DATA);
        // this.getChildrenBySource(this.sourcePositionID);
      })
    });
  }
  getChildrenBySource(sourceID) {
    let childrenArr = [];
    this.links.forEach(link => {
      if (link && link["source"] == sourceID) {
        let tmp = {
          id: link["target"],
          name: this.mapPositionIDToPositionName(link["target"]),
          color: this.mapPositionIDToColor(link["target"]),
          children: this.getChildrenBySource(link["target"])
        };
        childrenArr.push(tmp);
        console.log("sourceID: ", sourceID, "has childrenArr: ", childrenArr);
      }
    })
    return childrenArr;
  }
  mapPositionIDToPositionName(positionID){
    let name;
    this.positions.forEach(position=>{
      if(position["id"]==positionID) name=position["name"];
    })
    return name;
  }
  mapPositionIDToColor(positionID){
    let color;
    this.positions.forEach(position=>{
      if(position["id"]==positionID) color=position["careerpathObj"]["color"];
    })
    return color;
  }
  //
}

