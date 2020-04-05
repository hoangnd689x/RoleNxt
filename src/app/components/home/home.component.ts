import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  departmentNames = [
    "ENG",
    "EVH",
    "EJV",
    "ESS",
    "EPS",
    "EPS",
    "EPS",
    "ETI",
    "ETM",
  ];
  ngOnInit() {
  }

}
