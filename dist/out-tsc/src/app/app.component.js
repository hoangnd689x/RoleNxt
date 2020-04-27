import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let AppComponent = class AppComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.title = "Career Lattice";
        this.roleID = -1;
        this.roleName = "";
        this.roleSummary = "";
        this.roleLink = "";
        this.bandID = -1;
        this.bandName = "";
        this.data = dataService;
    }
    ngOnInit() {
        this.isLoggedIn = true;
        this.isAdmin = true;
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
    openCompModal(competencyModal, band_id, band_name) {
        this.bandID = band_id;
        this.modalService.open(competencyModal, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map