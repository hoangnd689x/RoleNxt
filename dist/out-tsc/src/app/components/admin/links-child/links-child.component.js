import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let LinksChildComponent = class LinksChildComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.arr = [];
        this.numberOfNextPosition = 0;
    }
    ngOnInit() {
    }
    changes() {
        this.arr = new Array(this.numberOfNextPosition).fill(0).map((x, i) => i);
    }
    save() {
        let tmpLinks = [];
        this.arr.forEach((e, index) => {
            let tmp = {};
            tmp["source"] = +this.positionID;
            tmp["target"] = +document.getElementById("select" + this.positionID + index)["value"];
            tmp["orgID"] = +this.departmentID;
            tmpLinks.push(tmp);
        });
        console.log(tmpLinks);
        this.dataService.saveLinks(tmpLinks)
            .subscribe(result => {
            console.log("save link response: ", result);
        });
    }
};
tslib_1.__decorate([
    Input()
], LinksChildComponent.prototype, "departmentID", void 0);
tslib_1.__decorate([
    Input()
], LinksChildComponent.prototype, "positionID", void 0);
tslib_1.__decorate([
    Input()
], LinksChildComponent.prototype, "positions", void 0);
LinksChildComponent = tslib_1.__decorate([
    Component({
        selector: 'links-child',
        templateUrl: './links-child.component.html',
        styleUrls: ['./links-child.component.css']
    })
], LinksChildComponent);
export { LinksChildComponent };
//# sourceMappingURL=links-child.component.js.map