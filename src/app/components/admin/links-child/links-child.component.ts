import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'links-child',
  templateUrl: './links-child.component.html',
  styleUrls: ['./links-child.component.css']
})
export class LinksChildComponent implements OnInit {

  @Input() departmentID;
  @Input() positionID: number;
  @Input() positions;
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
  }
  arr = []
  numberOfNextPosition = 0;
  changes() {
    this.arr = new Array(this.numberOfNextPosition).fill(0).map((x, i) => i);
  }
  save() {
    let tmpLinks = [];
    this.arr.forEach((e, index) => {
      let tmp = {}
      tmp["source"] = +this.positionID;
      tmp["target"] = +document.getElementById("select" + this.positionID + index)["value"];
      tmp["orgID"] = +this.departmentID;
      tmpLinks.push(tmp);

    })
    console.log(tmpLinks);
    this.dataService.saveLinks(tmpLinks)
      .subscribe(result => {
        console.log("save link response: ", result);
      })
  }
}
