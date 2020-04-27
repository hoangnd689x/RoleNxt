import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.isLoaded = false;
        this.domain = [];
        this.result = []; // [{items:[],name:""}]
        this.departmentColorCode = [
            "#e64179",
            "#f54d27",
            "#f3a394",
            "#fbc76e",
            "#555db7",
            "#cd79f2",
            "#7221ca",
            "#cecaee",
            "#3140b3",
            "#fc4411",
        ];
        this.department = [];
    }
    ngOnInit() {
        this.dataService.getDepartment().subscribe(result => {
            result.forEach((department, index) => {
                department["color"] = this.departmentColorCode[index] || "#555db7";
                this.department.push(department);
            });
            this.getDomain(result);
            this.isLoaded = true;
        }, err => {
            this.isLoaded = true;
        });
    }
    getDomain(data) {
        data.forEach(e => {
            let domain = e["domainObj"]["name"];
            if (this.domain.indexOf(domain) == -1)
                this.domain.push(domain);
        });
        console.log(this.domain);
        // convert into [{domain_name:,department:[]},{}]
        this.result = this.domain.map(domainName => {
            let tmp = {};
            tmp["name"] = domainName;
            tmp["bgImage"] = domainName == "IT" ? "url('./assets/IT.jpg')" : "url('./assets/Engineering.jpg')";
            tmp["bgcolor"] = domainName == "IT" ? "#fdfd96" : "#f0f8ff";
            tmp["items"] = [];
            data.forEach(e => {
                if (e["domainObj"]["name"] == domainName) {
                    tmp["items"].push(e);
                }
            });
            return tmp;
        });
        console.log(this.result);
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map