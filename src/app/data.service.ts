import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Position } from './classes/position';
import { Promotion } from './classes/promotion';
import { domain, port } from "../environments/environment";
@Injectable({
  providedIn: "root"
})
export class DataService {
  // barUrl="http://localhost:8080/orgchartapis";
  barUrl="http://10.184.93.88:6060/orgchart";
  constructor(private http: HttpClient) { }

  loginDetails = this.http.get<JSON>("api/user-details");
  positions = this.http.get<Position[]>("api/positions");
  promotions = this.http.get<Promotion[]>("api/promotions");
  getPositionsByDepartmentID = (departmentID: String) => this.http.get<JSON[]>(this.barUrl+"/api/position/get-by-org/" + departmentID);
  getLinksByDepartmentID = (departmentID: String) => this.http.get<JSON[]>(this.barUrl+"/api/connection/get-by-org/" + departmentID);
  getDepartment = () => this.http.get<JSON[]>(this.barUrl+"/api/org/get-all/");
  getCluster = () => this.http.get<JSON[]>(this.barUrl+"/api/role/get-all");
  getAllCareerPaths = () => this.http.get<JSON[]>(this.barUrl+"/api/career-path/get-all");
  getAllPositionDetails = () => this.http.get<JSON[]>(this.barUrl+"/api/position/get-all");
  getPositionDetails = (positionID) => this.http.get<JSON[]>(this.barUrl+"/api/position/get-by-id/"+positionID);
  getRoleById = (positionID) => this.http.get<JSON[]>(this.barUrl+"/api/role/get-by-id/"+positionID);
  getRolesByPositionId = (positionID) => this.http.get<JSON[]>(this.barUrl+"/api/role/get-by-position/"+positionID);
  saveLinks = (links) => this.http.post(this.barUrl+"/api/addCon", links);
}
