import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Competency } from '../model/Competency';
import { Organization } from '../model/organization';
import { Domain } from '../model/domain';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Role } from '../model/role';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {
  positionID = "";
  positionDetail: any;
  positionDetailEntryCriteria: any;
  positionDetailResponsibilities: any;
  positionDetailKRA: any;
  isLoaded: Boolean = false;
  paramsSubscription: Subscription;
  competencies: Competency[];
  competenciesMap: Map<number, Competency> = new Map();
  orgs: Organization[];
  domains: Domain[];
  addForm: FormGroup;

  // show more
  isShowMoreRes: Boolean = false;
  isShowMoreKRA: Boolean = false;
  isShowMoreComp: Boolean = false;
  isShowMoreEntr: Boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getAllDomain();

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.positionID = params['id'];
      this.dataService.getRolesByPositionId(this.positionID).subscribe(data => {
        this.positionDetail = data[0];
        console.log("position detail:", this.positionDetail.competencies);
        this.positionDetailEntryCriteria = data[0].entryCriteria.split("\n");
        this.positionDetailResponsibilities = data[0].responsibilities.split("\n");
        this.positionDetailKRA = data[0].kra.split("\n");
        this.isLoaded = true;
      })
    });
    // let allPositions = this.getAllPositionDetails();
    this.addForm = this.formBuilder.group({
      domain: ['-1', Validators.required],
      org: ['-1']
    });

  }
  ngOnDestroy() {
    console.log("Component will be destroyed");
    this.paramsSubscription.unsubscribe();
  }
  backToPositions() {
    this._location.back();
  }
  backToLatticePage() {

  }

  showMoreKRA(){
    this.isShowMoreKRA = true;
  }

  showMoreRes(){
    this.isShowMoreRes = true;
  }

  showMoreComp(){
    this.isShowMoreComp = true;
  }

  showMoreEntr(){
    this.isShowMoreEntr = true;
  }

  loadCompetencyAndOrg(domainId: string) {
    console.log(domainId);
    this.getCompetenciesByDomainId(domainId);
    this.getOrgByDomainId(domainId);
  }

  getCompetenciesByDomainId(domainId: string) {
    this.dataService.getCompetencyByDomainId(domainId).subscribe(data => {
      this.competencies = data;
      console.log(this.competencies);
      this.competencies.forEach(val => {
        this.competenciesMap.set(val.id, val);
      });
    });
  }

  getOrgByDomainId(domainId: string) {
    this.dataService.getOrgsByDomainId(domainId).subscribe(data => {
      this.orgs = data;
      console.log(this.orgs);
    });
  }

  getAllDomain() {
    this.dataService.getAllDomain().subscribe(data => {
      this.domains = data;
      console.log("All domains:", this.domains);
    });
  }

  changeDetailByDomain(domainId, positionId) {
    this.positionDetailEntryCriteria = [];
    this.positionDetailResponsibilities = [];
    this.positionDetailKRA = [];
    this.positionDetail.competencies = [];
    this.dataService.getRoleByDomain(domainId, positionId).subscribe(data => {
      if(data.activate == true){
        this.positionDetail = data;
        console.log("data", data);
        this.positionDetailEntryCriteria = data.entryCriteria.split("\n");
        this.positionDetailResponsibilities = data.responsibilities.split("\n");
        this.positionDetailKRA = data.kra.split("\n");
      }
      
      this.isLoaded = true;
    });
  }
}
