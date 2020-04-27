import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import * as sHash from '../../../assets/saltedHashing.js';
let LoginComponent = class LoginComponent {
    constructor(fb, http, router, dataService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.title = "Angular Login Form";
        this.signInStatus = "f";
        this.data = dataService;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    getHeaders() {
        return (this.headers = {
            "Content-Type": "application/json"
        });
    }
    successfulLogin(isAdmin, username) {
        this.data.loginDetails.subscribe(value => {
            value["isAdmin"] = isAdmin;
            value["loggedIn"] = true;
            value["username"] = username;
        });
    }
    onClickSubmit(username, password) {
        let formData = new FormData();
        password = sHash.saltedHash(password);
        let params = { username: username, password: password };
        this.headers = {
            'Content-Type': 'application/json'
        };
        // this.http
        //   .post('/api/user-details', { params: params }, this.headers)
        //   .subscribe(response => {
        //     let rsp = JSON.stringify(response);
        //     rsp = rsp.substring(11, 12);
        //     if (rsp == 'a') {
        //       this.successfulLogin(true, username);
        //     } else if (rsp == 'e') {
        //       this.successfulLogin(false, username);
        //     } else if (rsp == 'f') {
        //       alert('Failed');
        //     }
        //     window.location.reload();
        //     this.signInStatus = rsp;
        //   });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css"]
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map