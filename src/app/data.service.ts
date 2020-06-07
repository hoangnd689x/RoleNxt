import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Position } from './classes/position';
import { Promotion } from './classes/promotion';
import { domain, port } from "../environments/environment";
import { Observable } from 'rxjs';
import { Competency } from './components/model/Competency';
import { Organization } from './components/model/organization';
import { Domain } from './components/model/domain';
import { Role } from './components/model/role';
import { DomainDept } from './components/model/DomainDept';
@Injectable({
  providedIn: "root"
})
export class DataService {
  //baseUrl="http://localhost:8080/orgchartapis";
   baseUrl="http://10.184.93.88:6060/orgchart";
  constructor(private http: HttpClient) { }

  loginDetails = this.http.get<JSON>("api/user-details");
  positions = this.http.get<Position[]>("api/positions");
  promotions = this.http.get<Promotion[]>("api/promotions");
  getPositionsByDepartmentID = (departmentID: String) => this.http.get<JSON[]>(this.baseUrl+"/api/position/get-by-org/" + departmentID);
  getLinksByDepartmentID = (departmentID: String) => this.http.get<JSON[]>(this.baseUrl+"/api/connection/get-by-org/" + departmentID);
  getDepartment = () => this.http.get<JSON[]>(this.baseUrl+"/api/org/get-all/");
  getCluster = () => this.http.get<JSON[]>(this.baseUrl+"/api/role/get-all");
  getAllCareerPaths = () => this.http.get<JSON[]>(this.baseUrl+"/api/career-path/get-all");
  getAllPositionDetails = () => this.http.get<JSON[]>(this.baseUrl+"/api/position/get-all");
  getPositionDetails = (positionID) => this.http.get<JSON[]>(this.baseUrl+"/api/position/get-by-id/"+positionID);
  getRoleById = (positionID) => this.http.get<JSON[]>(this.baseUrl+"/api/role/get-by-id/"+positionID);
  getRolesByPositionId = (positionID) => this.http.get<Role[]>(this.baseUrl+"/api/role/get-by-position/"+positionID);
  saveLinks = (links) => this.http.post(this.baseUrl+"/api/addCon", links);

  getCompetencyByDomainId(id: string): Observable<Competency[]> {
    return this.http.get<Competency[]>(this.baseUrl+'/api/competency/get-by-domain/' + id);
  }

  getOrgsByDomainId(domainId: string) : Observable<Organization[]> {
    return this.http.get<Organization[]>(this.baseUrl+'/api/org/get-by-domain/'+domainId);
  }

  getDomainsByPosition(positionId: string): Observable<DomainDept[]> {
    return this.http.get<DomainDept[]>(this.baseUrl+'/api/department-domain/get-by-position/'+ positionId)
  }

  getRoleByDomain(domainId: string, positionId: string ): Observable<Role> {
    return this.http.get<Role>(this.baseUrl+'/api/role/get-by-domain-position?domainId=' + domainId + "&positionId="+ positionId)
    //return this.http.get<Role>(this.baseUrl + '/api/role/get-by-domain-position?domainId=' + domainId + "&positionId="+ positionId +"&domainDeptId="+ domainDeptId)
  }
}
