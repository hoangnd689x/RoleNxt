import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PositionDetailComponent = class PositionDetailComponent {
    constructor(dataService, route, _location) {
        this.dataService = dataService;
        this.route = route;
        this._location = _location;
        this.positionID = "";
        this.isLoaded = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.positionID = params['id'];
        });
        // let allPositions = this.getAllPositionDetails();
        this.dataService.getRoleById(this.positionID).subscribe(data => {
            this.positionDetail = data;
            console.log(this.positionDetail);
            this.isLoaded = true;
        });
    }
    backToPositions() {
        this._location.back();
    }
};
PositionDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-position-detail',
        templateUrl: './position-detail.component.html',
        styleUrls: ['./position-detail.component.css']
    })
], PositionDetailComponent);
export { PositionDetailComponent };
//# sourceMappingURL=position-detail.component.js.map