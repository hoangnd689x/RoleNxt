import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Position } from './classes/position';
import {Promotion} from './classes/promotion';

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private http: HttpClient) {}

  loginDetails = this.http.get<JSON>("api/user-details");
  positions = this.http.get<Position[]>("api/positions");
  promotions = this.http.get<Promotion[]>("api/promotions");

  getPositions = () => this.http.get<JSON[]>("http://localhost:8080/orgchart/api/getAllStructures/");
  
}
