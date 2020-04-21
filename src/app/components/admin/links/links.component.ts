import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  departmentId: String = "";
  isLoaded: Boolean = false;
  closeResult = '';
  positions = [];
  tmpNumberOfNextLevel = 0;
  constructor(private dataService: DataService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.departmentId = params['id'];
    });
    this.dataService.getPositionsByDepartmentID(this.departmentId).subscribe(result => {
      this.positions = result;
      this.isLoaded = true;
    })
  }

}