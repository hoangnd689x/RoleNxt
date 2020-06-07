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
  careerPaths = [{ "id": 1, "name": "TCP", "color": "#0E78C5" }, { "id": 2, "name": "PCP", "color": "#1399A0" }, { "id": 3, "name": "LCP", "color": "#67B419" }]
  checked_default = {};

  // TCP
  // CT_08 Consultant
  // CT_06 Lead Consultant
  // CT_04 Architect
  // CT_02 Principal Consultant
  // BT_01 Team member / Member engineering
  // CT_09 Specialist
  // CT_07 Sr. Specialist
  // CT_05 Architect
  // CT_03 Expert
  // CT01 CoE Head
  // PCP
  // RT_01: a/b
  // RT_02 c
  // RT_03 d
  // LCP
  // RE_01 Practice Head
  // RE_04 Delivery Manager
  // RE_02 Competency Lead
  // RE_06 Resource Manager
  // RE_05 Resource Head
  // RE_03 Service Delivery Manager
  careerPathPositionIDMap = {
    1: ["CT_08", "CT_06", "CT_04", "CT_02", "BT_01", "CT_09", "CT_07", "CT_05", "CT_03", "CT01"],
    2: ["RT_01", "RT_02", "RT_03"],
    3: [
      "RE_01",
      "RE_04",
      "RE_02",
      "RE_06",
      "RE_05",
      "RE_03"
    ]
  }
  ngOnInit() {
    // document.getElementById("CT01").onclick=this.navigateToLogin;
    console.log("oninit");
    let isFilterExisted = false;
    // check if already stored filter value in local storage
    if (localStorage.getItem("checked_default")) {
      console.log(JSON.parse(localStorage.getItem("checked_default")));
      this.checked_default = JSON.parse(localStorage.getItem("checked_default"));
      isFilterExisted = true;
    }
    // initial checkbox filter value
    if (!isFilterExisted) {
      this.careerPaths.forEach(e => {
        this.checked_default[e.id] = true;
      })
    }
    if (isFilterExisted) {
      for (let id in this.checked_default) {
        let checked = this.checked_default[id];
        if (!checked) {
          this.showHidePositionByCareerPath(id, checked);
        }
      }
    }
  }
  navigateToDetails(id) {
    this.router.navigate(['position-details', id]);
  }

  filterCareerPathaByID(id, e) { // here e is a boolean, true if checked, otherwise false
    // console.log("id: " + id + " e: ", e.target.checked)
    // console.log("checked_default: ", this.checked_default)
    this.showHidePositionByCareerPath(id, e.target.checked);
    // to save state into local storage
    localStorage.setItem("checked_default", JSON.stringify(this.checked_default));
  }
  showHidePositionByCareerPath(careerPathId, isShow) {
    for (let prop in this.careerPathPositionIDMap) {
      if (prop == careerPathId) {
        let ids = this.careerPathPositionIDMap[prop];
        ids.forEach(positionID => {
          isShow ? document.getElementById(positionID).removeAttribute("display") : document.getElementById(positionID).setAttribute("display", "none");
        });
      }
    }
  }
}