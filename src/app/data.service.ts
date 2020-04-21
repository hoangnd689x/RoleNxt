import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Position } from './classes/position';
import { Promotion } from './classes/promotion';
import { domain, port } from "../environments/environment";
@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private http: HttpClient) { }

  loginDetails = this.http.get<JSON>("api/user-details");
  positions = this.http.get<Position[]>("api/positions");
  promotions = this.http.get<Promotion[]>("api/promotions");

  // local
  // getPositionsByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getPositionsByOrgId/" + departmentID);
  // getLinksByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getAllConnectionsByDepartmentID/" + departmentID);
  // getDepartment = () => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getAllOrgs/");
  // getCluster = () => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getAllStructures/");
  // getAllCareerPaths = () => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getAllCPs/");
  // getAllPositionDetails = () => this.http.get<JSON[]>("http://localhost:8080//orgchart/api/getAllPositionDetails/");
  // getPositionDetails = (positionID) => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getPosById/"+positionID);
  // getRoleById = (positionID) => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getRoleById/"+positionID);
  // // post
  // saveLinks = (links) => this.http.post("http://localhost:8080/orgchart/api/addCon", links);

  // Q
  getPositionsByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getPositionsByOrgId/" + departmentID);
  getLinksByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getAllConnectionsByDepartmentID/" + departmentID);
  getDepartment = () => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getAllOrgs/");
  getCluster = () => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getAllStructures/");
  getAllCareerPaths = () => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getAllCPs/");
  getAllPositionDetails = () => this.http.get<JSON[]>("http://10.184.93.88:6060//orgchartapis/api/getAllPositionDetails/");
  getPositionDetails = (positionID) => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getPosById/"+positionID);
  getRoleById = (positionID) => this.http.get<JSON[]>("http://10.184.93.88:6060/orgchartapis/api/getRoleById/"+positionID);
  // post
  saveLinks = (links) => this.http.post("http://10.184.93.88:6060/orgchartapis/api/addCon", links); 
}
