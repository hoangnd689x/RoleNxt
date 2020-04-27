import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LinksComponent = class LinksComponent {
    constructor(dataService, route, modalService) {
        this.dataService = dataService;
        this.route = route;
        this.modalService = modalService;
        this.departmentId = "";
        this.isLoaded = false;
        this.closeResult = '';
        this.positions = [];
        this.tmpNumberOfNextLevel = 0;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.departmentId = params['id'];
        });
        this.dataService.getPositionsByDepartmentID(this.departmentId).subscribe(result => {
            this.positions = result;
            this.isLoaded = true;
        });
    }
};
LinksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-links',
        templateUrl: './links.component.html',
        styleUrls: ['./links.component.css']
    })
], LinksComponent);
export { LinksComponent };
//# sourceMappingURL=links.component.js.map