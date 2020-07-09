import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../data.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competency } from '../model/Competency';
import { Organization } from '../model/organization';
import { DomainDept } from '../model/DomainDept';
import { FormGroup } from '@angular/forms';
import { Position } from '../model/Position';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {

  @Input()
  isAdmin: boolean;

  title = "Career Lattice";
  roleID = -1;
  roleName = "";
  roleSummary = "";
  roleLink = "";

  bandID = -1;

  data: DataService;

  positionID = "";
  positionDetail: any;
  positionDetailEntryCriteria: any;
  positionDetailResponsibilities: any;
  positionDetailKRA: any;
  positionDetailCompetencies: any;
  positionDetailIndustryRoles: any;
  isLoaded: Boolean = false;
  paramsSubscription: Subscription;
  competencies: any;
  competenciesMap: Map<number, Competency> = new Map();
  orgs: Organization[];
  domainDept: DomainDept[];
  addForm: FormGroup;
  selectedItemId:String = null;
  isMemberEngineering: Boolean = false;

  listPosition: Position[];
  depId: any;

    // create tabs
    listTabs: string[] = ['Career Map','Comparison'];
    selectedTab = 'Career Map';
  changeTab(tab){
    console.log("tab", tab);
    this.selectedTab = tab;
  }

  constructor(dataService: DataService, private modalService: NgbModal, private route: ActivatedRoute) {
    this.data = dataService;
  }

  openModal(content, id, name, summary, link) {
    this.roleID = id;
    this.roleName = name;
    this.roleSummary = summary;
    this.roleLink = link;
    this.modalService.open(content, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }

  openCompModal(competencyModal, band_id) {
    this.bandID = band_id;
    this.modalService.open(competencyModal, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }

  ngOnInit(){

    this.data.getPositionObjsByDepartmentID('2').subscribe(data => {
      this.listPosition = data;
      console.log("this.listPosition",this.listPosition);
    })
        // fill data to tab
        this.paramsSubscription = this.route.params.subscribe(params => {
          this.positionID = params['id'];
          this.data.getRolesByPositionId('7').subscribe(data => {
            this.positionDetail = data[0];
            this.isMemberEngineering=data[0].positionObj["name"].indexOf("Member Engineer")!=-1;
            this.positionDetailEntryCriteria = data[0].entryCriteria.split("\n");
            this.positionDetailResponsibilities = data[0].responsibilities.split("\n");
            this.positionDetailKRA = data[0].kra.split("\n");
            this.positionDetailCompetencies = data[0].competencies.split("\n");
            this.positionDetailIndustryRoles = data[0].kra.split("\n");
            this.isLoaded = true;
    
            // get depId to select all Postions for tab2
            this.depId = data[0].positionObj["organizationObj"]["id"];
            this.data.getPositionObjsByDepartmentID(this.depId).subscribe(data => {
              this.listPosition = data;
              this.isLoaded = true;
            })
    
          }, err => {
            this.isLoaded = true;
          })
        });
        //this.getDomainsByPosition();
        // let allPositions = this.getAllPositionDetails();
        // this.addForm = this.formBuilder.group({
        //   domain: ['-1', Validators.required],
        //   org: ['-1']
        // });
  }
}
