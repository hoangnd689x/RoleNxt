import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded = false;
  domain = [];
  result = []; // [{items:[],name:""}]
  departmentColorCode = [
    "#b90276",
    "#50237e",
    "#005693",
    "#008ed0",
    "#00a9b0",
    "#78be20",
    "#006249",
    "#cecaee",
    "#3140b3",
    "#fc4411",
  ]
  department = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getDepartment().subscribe(
      result => {
        result.forEach((department, index) => {
          department["color"] = this.departmentColorCode[index] || "#555db7";
          this.department.push(department);
        });
        this.getDomain(result);
        this.isLoaded = true;
      },
      err => {
        this.isLoaded = true;
      }
    );
  }

  getDomain(data) {
    data.forEach(e => {
      let domain = e["domainObj"]["name"];
      if (this.domain.indexOf(domain) == -1) this.domain.push(domain);
    })
    console.log(this.domain)
    // convert into [{domain_name:,department:[]},{}]
    this.result=this.domain.map(domainName => {
      let tmp = {};
      tmp["name"] = domainName;
      tmp["bgImage"] = domainName=="IT"?"url('./assets/IT.jpg')":"url('./assets/Engineering.jpg')";
      tmp["bgcolor"] = domainName=="IT"?"rgba(218, 255, 153, 0.27)":"rgba(238, 28, 28, 0.11)";
      tmp["items"] = [];
      data.forEach(e => {
        if (e["domainObj"]["name"] == domainName && e["name"]!="ETI") {
          tmp["items"].push(e);
        }
      })
      return tmp;
    })
    console.log(this.result);
  }


}
