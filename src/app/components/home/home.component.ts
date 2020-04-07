import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded = false;
  departmentNames = [];
  departmentColorCode = [
    "#e64179",
    "#f54d27",
    "#f3a394",
    "#fbc76e",
    "#555db7",
    "#cd79f2",
    "#7221ca",
    "#cecaee",
    "#3140b3",
    "#fc4411",
  ]
  department=[];

  constructor(dataService: DataService) {
    dataService.getDepartment().subscribe(
      result => {
        let tmp = [];
        tmp=result.map(e => e["departmentName"]);
        const uniSet = new Set(tmp);
        this.departmentNames = [...uniSet];
        this.departmentNames.forEach((name,index) => {
          let tmp={};
          tmp["name"]=name;
          tmp["color"]=this.departmentColorCode[index] || "#555db7";
          if(tmp["name"] && tmp["name"]!="") this.department.push(tmp)
        });
        this.isLoaded = true;
      },
      err => {
        this.isLoaded = true;
      }
    );
  }

  ngOnInit() {
  }

}
