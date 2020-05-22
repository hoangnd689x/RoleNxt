import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clusters, positions, promotions } from "../../classes/data-it";
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Position } from 'src/app/classes/position';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Promotion } from 'src/app/classes/promotion';

@Component({
  selector: 'app-career-lattice-it',
  templateUrl: './career-lattice-it.component.html',
  styleUrls: ['./career-lattice-it.component.css']
})
export class CareerLatticeItComponent implements OnInit {
  constructor(private router: Router) {

  }
  // idMap = {
  //   CT01: "15",
  //   RE_01: "2",
  //   RE_04: "3",
  //   RE_02: "4",
  //   RE_06: "5",
  //   RE_05: "6",
  //   RE_03: "7",
  //   CT_03: "8",
  //   RT_01: "9",
  //   RT_02: "10",
  //   RT_03: "11",
  //   CT_05: "12",
  //   CT_07: "13",
  //   CT_09: "14",
  //   BT_01: "1",
  //   CT_02: "16",
  //   CT_04: "17",
  //   CT_06: "18",
  //   CT_08: "19"
  // }
  ngOnInit() {
    // document.getElementById("CT01").onclick=this.navigateToLogin;
  }
  navigateToDetails(id) {
    this.router.navigate(['position-details', id]);
  }


}
