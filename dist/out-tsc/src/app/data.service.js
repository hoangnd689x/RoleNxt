import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.loginDetails = this.http.get("api/user-details");
        this.positions = this.http.get("api/positions");
        this.promotions = this.http.get("api/promotions");
        // local
        // getPositionsByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getPositionsByOrgId/" + departmentID);
        // getLinksByDepartmentID = (departmentID: String) => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getAllConnectionsByDepartmentID/" + departmentID);
        // getDepartment = () => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getAllOrgs/");
        // getCluster = () => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getAllStructures/");
        // getAllCareerPaths = () => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getAllCPs/");
        // getAllPositionDetails = () => this.http.get<JSON[]>("http://localhost:8080//orgchartapis/api/getAllPositionDetails/");
        // getPositionDetails = (positionID) => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getPosById/"+positionID);
        // getRoleById = (positionID) => this.http.get<JSON[]>("http://localhost:8080/orgchartapis/api/getRoleById/"+positionID);
        // // post
        // saveLinks = (links) => this.http.post("http://localhost:8080/orgchartapis/api/addCon", links);
        // // Q
        this.getPositionsByDepartmentID = (departmentID) => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getPositionsByOrgId/" + departmentID);
        this.getLinksByDepartmentID = (departmentID) => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getAllConnectionsByDepartmentID/" + departmentID);
        this.getDepartment = () => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getAllOrgs/");
        this.getCluster = () => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getAllStructures/");
        this.getAllCareerPaths = () => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getAllCPs/");
        this.getAllPositionDetails = () => this.http.get("http://10.184.93.88:6060//orgchartapis/api/getAllPositionDetails/");
        this.getPositionDetails = (positionID) => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getPosById/" + positionID);
        this.getRoleById = (positionID) => this.http.get("http://10.184.93.88:6060/orgchartapis/api/getRoleById/" + positionID);
        // post
        this.saveLinks = (links) => this.http.post("http://10.184.93.88:6060/orgchartapis/api/addCon", links);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map