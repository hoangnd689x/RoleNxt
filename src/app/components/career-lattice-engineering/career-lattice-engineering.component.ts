
import { Component, OnInit } from "@angular/core";
import { clusters, positions, promotions, careerPaths } from "../../classes/data";
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Position } from 'src/app/classes/position';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Promotion } from 'src/app/classes/promotion';
import { CareerPath } from 'src/app/classes/career-path';


export interface IHash {
  [id: string]: CareerPath;
}

@Component({
  selector: "app-home",
  templateUrl: "./career-lattice-engineering.component.html",
  styleUrls: ["./career-lattice-engineering.component.css"]
})
export class CareerLatticeEngineeringComponent implements OnInit {

  name = 'NGX-Graph Demo';
  data: DataService;

  links: Edge[];
  nodes: Node[];
  clusters: ClusterNode[] = clusters;
  // positions: Position[] = positions;
  positions: Position[] = [];
  // promotions: Promotion[] = promotions;
  promotions: Promotion[] = [];
  selectedPosition: Position;
  careerPaths: CareerPath[] = careerPaths;
  private careerMap: IHash = {};
  isLoaded: Boolean = false;

  public layoutSettings = {
    orientation: "BT"
  }

  layout: String | Layout = 'dagreCluster';

  // line interpolation
  curveType: string = 'Bundle';
  curve: any = shape.curveLinear;

  draggingEnabled: boolean = false;
  panningEnabled: boolean = false;
  zoomEnabled: boolean = false;

  autoZoom: boolean = true;
  autoCenter: boolean = true;

  constructor(dataService: DataService, private modalService: NgbModal, ) {
    this.data = dataService;
    dataService.getPositions().subscribe(
      result => {
        let tmp = [];
        result.forEach(e => {
          if (e["departmentName"] == "ETM") {
            tmp.push(e);
          }
        })
        //
        this.positions = this.getTmpNodeArray(tmp);
        this.promotions = this.getTmpLinkDataArray(tmp);
        this.getPositions();
        this.getPromotions();
        console.log(this.nodes);
        console.log(this.links);
        this.isLoaded = true;
      },
      err => console.error(err),
      () => console.log('done loading positions')
    );
  }

  getPositions(): void {
    this.nodes = this.positions.map(position => {
      let newNode: Node = {
        // id: position.position_id,
        id: position.position_id.toString(),
        label: position.position_name,
        dimension: {
          width: 1000,
          height: 250
        },
        data: {
          customColor: this.careerMap[position.career_path_id].color_code
        }
      }
      return newNode;
    });

  }
  getPromotions(): void {
    this.links = this.promotions.map(promotion => {
      let newEdge: Edge = {
        id: 'e' + promotion.promotion_id.toString(),
        source: promotion.start_position_id.toString(),
        target: promotion.next_position_id.toString()
      }
      return newEdge;
    });
  }

  generateHashMap(): void {
    this.careerPaths.forEach(element => {
      this.careerMap[element.career_path_id] = element;
    });
  }

  ngOnInit() {
    this.generateHashMap();
    // this.getPositions();

    this.getPromotions();
  }

  openModal(content, id: string) {
    this.selectedPosition = this.positions.find(function (element, index, array) {
      return (element.position_id.toString() === id.toString());
    })
    this.modalService.open(content, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }

  getTmpNodeArray(structures) {

    var temp = [];
    // to reassign obj, remove id,departmentname & domain
    var newStructure = structures.map(e => {
      let tmp = {};
      for (let i in e) {
        if (i != "id" && i != "departmentName" && i != "domain") {
          tmp[i] = e[i];
        }
      }
      return tmp;
    });

    var tmp = [];
    var arr = newStructure.map(e => {

      for (let i in e) {
        if (e[i] != null && e[i] != undefined) {
          tmp.push(e[i]);
        }
      }

    })
    let filtered = [...new Set(tmp)];

    // to convert into arr of obj
    let result = [];
    filtered.map((e, i) => {
      let tmp = {};
      tmp["position_id"] = e;
      tmp["position_name"] = e;
      tmp["position_summary"] = e;
      // tmp["career_path_id"] = "1";
      tmp["career_path_id"] = new Date().getMilliseconds() % 3;
      if (e != "") result.push(tmp);
    })

    return result;

  }

  getTmpLinkDataArray(structures) {
    var temp = [];
    // to reassign obj, remove id,departmentname & domain
    var newStructure = structures.map(e => {
      let tmp = {};
      for (let i in e) {
        if (i != "id" && i != "departmentName" && i != "domain") {
          tmp[i] = e[i];
        }
      }
      return tmp;
    });

    var tmpPair = [];
    var arr = newStructure.map(e => {

      let tmp = [];
      for (let i in e) {
        if (e[i] != null && e[i] != undefined) {
          tmp.push(e[i]);
        }
      }

      //
      let index = 0;
      for (let i = 0; i < tmp.length - 1; i++) {
        let tmpObj = {};
        if (tmp[i] == "" || tmp[i + 1] == "") continue;
        tmpObj["promotion_id"] = ++index;
        tmpObj["start_position_id"] = tmp[i];
        tmpObj["next_position_id"] = tmp[i + 1];
        tmpPair.push(tmpObj)
      }
    })
    // to convert into new arr of obj
    // obj: {from: ..., to: ..., color: ...}
    let keys = ['start_position_id', 'next_position_id'];
    let filtered = tmpPair.filter(
      (s => o =>
        (k => !s.has(k) && s.add(k))
          (keys.map(k => o[k]).join('|'))
      )
        (new Set)
    );

    return filtered;

  }
}
