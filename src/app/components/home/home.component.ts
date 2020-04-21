import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded = false;
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
        this.isLoaded = true;
      },
      err => {
        this.isLoaded = true;
      }
    );
  }

}
