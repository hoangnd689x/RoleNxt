import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
let MainComponent = class MainComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.title = "Career Lattice";
        this.roleID = -1;
        this.roleName = "";
        this.roleSummary = "";
        this.roleLink = "";
        this.bandID = -1;
        this.data = dataService;
    }
    openModal(content, id, name, summary, link) {
        this.roleID = id;
        this.roleName = name;
        this.roleSummary = summary;
        this.roleLink = link;
        this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
    openCompModal(competencyModal, band_id) {
        this.bandID = band_id;
        this.modalService.open(competencyModal, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
tslib_1.__decorate([
    Input()
], MainComponent.prototype, "isAdmin", void 0);
MainComponent = tslib_1.__decorate([
    Component({
        selector: "app-main",
        templateUrl: "./main.component.html",
        styleUrls: ["./main.component.css"]
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map