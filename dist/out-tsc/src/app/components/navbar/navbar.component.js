import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let NavbarComponent = class NavbarComponent {
    constructor(route, dataservice, http) {
        this.route = route;
        this.dataservice = dataservice;
        this.http = http;
        this.title = "Career Lattice";
        this.data = dataservice;
    }
    ngOnInit() {
        this.data.loginDetails.subscribe(x => {
            this.username = x["username"];
        });
    }
    signUserOut() {
        this.http.post("/api/signout", "").subscribe(res => {
            this.resetLogInDetails();
            window.location.reload();
        });
    }
    resetLogInDetails() {
        this.data.loginDetails.subscribe(value => {
            value["isAdmin"] = false;
            value["loggedIn"] = false;
            value["username"] = null;
        });
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: "app-navbar",
        templateUrl: "./navbar.component.html",
        styleUrls: ["./navbar.component.css"]
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map