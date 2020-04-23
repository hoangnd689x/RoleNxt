
import { Component, OnInit } from "@angular/core";
// import { clusters, positions, promotions, careerPaths } from "../../classes/data";
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Position } from 'src/app/classes/position';
import { Promotion } from 'src/app/classes/promotion';
import { CareerPath } from 'src/app/classes/career-path';
import { ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';
// import { Cluster } from 'cluster';


export interface IHash {
  [id: string]: CareerPath;
}

@Component({
  selector: "app-home",
  templateUrl: "./career-lattice-engineering.component.html",
  styleUrls: ["./career-lattice-engineering.component.css"]
})
export class CareerLatticeEngineeringComponent implements OnInit {
  zoomToFit$: Subject<boolean> = new Subject();
  fitGraph() {
    this.zoomToFit$.next(true)
  }

  positionCareerPathMap = [];
  name = 'NGX-Graph Demo';
  data: DataService;
  departmentName = "";
  departmentID = "";
  links: Edge[];
  nodes: Node[];
  clusters: ClusterNode[] = [];
  clusterName = [];
  positions: Position[] = [];
  promotions: Promotion[] = [];
  selectedPosition: Position;
  careerPaths: CareerPath[] = [];
  tmpCareerPaths = [];
  private careerMap: IHash = {};
  isLoaded: Boolean = false;

  public layoutSettings = {
    orientation: "BT",
    // ranker: 'longest-path',
    // ranker: 'network-simplex',
    // marginX: 0,
    // marginY: 0,
    // rankPadding: 50,
    // nodePadding: 800,
  }
  layout: String | Layout = 'dagreCluster';
  // line interpolation
  curveType: string = 'Bundle';
  curve: any = shape.curveLinear;
  draggingEnabled: boolean = false;
  panningEnabled: boolean = false;
  zoomEnabled: boolean = true;

  autoZoom: boolean = true;
  autoCenter: boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    // this.data = dataService;

  }

  getPositions(result): void {
    this.nodes = result.map(position => {
      let isMemberEngineering = position["name"].indexOf("Member engineer") != -1;
      let node: Node = {
        id: position["id"] + '',
        label: position["name"],
        // meta: position["careerpathObj"]["name"],
        dimension: {
          width: isMemberEngineering ? 2300 : 1150,
          height: isMemberEngineering ? 300 : 200
        },
        data: {
          customColor: isMemberEngineering ? "#08427E" : position["careerpathObj"]["color"]
        }
      }
      return node;
    });
    console.log("positions: ", this.nodes)
  }
  getLinks = (result) => {
    this.links = result.map(link => {
      let newEdge: Edge = {
        id: 'e' + link["id"],
        source: link["source"],
        target: link["target"]
      }
      return newEdge;
    });
    console.log("connections: ", this.links)

  }
  generateHashMap(paths): void {
    let arr = paths.map(path => {
      let tmp = {};
      tmp["career_path_id"] = path["id"] + '';
      tmp["career_path_name"] = path["name"];
      tmp["color_code"] = path["color"];

      return tmp;
    });
    this.careerPaths = arr;
    this.careerMap = arr.map(path => {
      let tmp = {};
      return tmp[path["career_path_id"]] = path;
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.departmentID = params['id'];
    });
    this.dataService.getAllCareerPaths()
      .subscribe(paths => {
        this.generateHashMap(paths);
      })
    this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(
      result => {
        // convert positions
        this.getPositions(result);
        this.getClusters(result);
        this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(
          links => {
            // convert links
            this.getLinks(links);
            this.isLoaded = true;
          }
        )
      }
    )
  }
  getClusters(result) {
    let tmpClusters = [];
    let clusterNames = [];
    result.forEach(element => {
      let name = element["clusterID"];
      if (clusterNames.indexOf(name) == -1) clusterNames.push(name);
    });
    ///
    tmpClusters = clusterNames.map(name => {
      let tmp = {};
      tmp["id"] = "c"+name;
      tmp["label"] = "level "+name;
      tmp["childNodeIds"] = [];
      result.forEach(e => {
        if (e["clusterID"] == name) tmp["childNodeIds"].push(e["id"]+"");
      })
      return tmp;
    })
    this.clusters = tmpClusters;
    console.log("clusters: ",this.clusters);
  }
  gotoDetails(id: string) {
    this.selectedPosition = this.positions.find(function (element, index, array) {
      return (element.position_id.toString() === id.toString());
    })
  }
}
