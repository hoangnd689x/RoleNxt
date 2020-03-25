
import { Component, OnInit } from "@angular/core";
import { clusters, positions, promotions } from "../../classes/data";
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Position } from 'src/app/classes/position';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Promotion } from 'src/app/classes/promotion';




@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  name = 'NGX-Graph Demo';
  data: DataService;

  links: Edge[];
  nodes: Node[];
  clusters: ClusterNode[] = clusters;
  positions: Position[] = positions;
  promotions: Promotion[] = promotions;
  selectedPosition: Position;

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

  }

  getPositions(): void {
    this.nodes = this.positions.map(position => {
      let newNode: Node = {
        // id: position.position_id,
        id: position.position_id.toString(),
        label: position.position_name
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

  ngOnInit() {
    this.getPositions();

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

}
