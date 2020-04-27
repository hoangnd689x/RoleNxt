import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
let CareerLatticeEngineeringComponent = class CareerLatticeEngineeringComponent {
    constructor(dataService, route) {
        // this.data = dataService;
        this.dataService = dataService;
        this.route = route;
        this.zoomToFit$ = new Subject();
        this.positionCareerPathMap = [];
        this.name = 'NGX-Graph Demo';
        this.departmentName = "";
        this.departmentID = "";
        this.clusters = [];
        this.clusterName = [];
        this.positions = [];
        this.promotions = [];
        this.careerPaths = [];
        this.tmpCareerPaths = [];
        this.careerMap = {};
        this.isLoaded = false;
        this.layoutSettings = {
            orientation: "BT",
        };
        this.layout = 'dagreCluster';
        // line interpolation
        this.curveType = 'Bundle';
        this.curve = shape.curveLinear;
        this.draggingEnabled = false;
        this.panningEnabled = false;
        this.zoomEnabled = true;
        this.autoZoom = true;
        this.autoCenter = true;
        this.careerPathIds = [];
        this.isChecked = true;
        this.getLinks = (result) => {
            this.links = result.map(link => {
                let newEdge = {
                    id: 'e' + link["id"],
                    source: link["source"],
                    target: link["target"]
                };
                return newEdge;
            });
            console.log("connections: ", this.links);
        };
    }
    fitGraph() {
        this.zoomToFit$.next(true);
    }
    getPositions(result) {
        this.nodes = result.map(position => {
            let isMemberEngineering = position["name"].indexOf("Member engineer") != -1;
            let node = {
                id: position["id"] + '',
                label: position["name"],
                // meta: position["careerpathObj"]["name"],
                dimension: {
                    width: isMemberEngineering ? 2300 : 1150,
                    height: isMemberEngineering ? 300 : 200
                },
                data: {
                    customColor: isMemberEngineering ? "#08427E" : position["careerpathObj"]["color"]
                }
            };
            return node;
        });
    }
    checkValue(event) {
        console.log(event);
    }
    onNgModelChange(id, e) {
        if (e) {
            console.log("in e:", e);
            console.log("in e, id:", id);
            if (!this.careerPathIds.includes(id)) {
                this.careerPathIds.push(id);
            }
        }
        else {
            console.log("in else:", e);
            for (let i = 0; i < this.careerPaths.length; i++) {
                if (this.careerPathIds[i] == id) {
                    this.careerPathIds.splice(i, 1);
                }
            }
        }
        console.log("list ids:", this.careerPathIds);
    }
    //getPositionsByCareerPath
    getPositionsByCareerPath(careerId) {
        this.nodes = this.resultTmp.filter(function (node) {
            console.log("node: ", node);
            if (node["careerpathObj"]["id"] == careerId) {
                return true; // skip
            }
            return false;
        }).map(position => {
            console.log("position", position["careerpathObj"]["id"]);
            if (position["careerpathObj"]["id"] == careerId) {
                console.log("Inside");
                let isMemberEngineering = position["name"].indexOf("Member engineer") != -1;
                let node = {
                    id: position["id"] + '',
                    label: position["name"],
                    // meta: position["careerpathObj"]["name"],
                    dimension: {
                        width: isMemberEngineering ? 2300 : 1150,
                        height: isMemberEngineering ? 300 : 200
                    },
                    data: {
                        customColor: isMemberEngineering ? "#08427E" : position["careerpathObj"]["color"]
                    }
                };
                console.log("node", node);
                return node;
            }
        });
        console.log("this nodes: ", this.nodes);
        console.log("this resultTmp: ", this.resultTmp);
    }
    generateHashMap(paths) {
        let arr = paths.map(path => {
            let tmp = {};
            tmp["career_path_id"] = path["id"] + '';
            tmp["career_path_name"] = path["name"];
            tmp["color_code"] = path["color"];
            return tmp;
        });
        this.careerPaths = arr;
        this.careerMap = arr.map(path => {
            let tmp = {};
            return tmp[path["career_path_id"]] = path;
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.departmentID = params['id'];
        });
        this.dataService.getAllCareerPaths()
            .subscribe(paths => {
            this.generateHashMap(paths);
        });
        this.dataService.getPositionsByDepartmentID(this.departmentID).subscribe(result => {
            // convert positions
            this.resultTmp = result;
            this.getPositions(result);
            this.getClusters(result);
            this.dataService.getLinksByDepartmentID(this.departmentID).subscribe(links => {
                // convert links
                this.getLinks(links);
                this.isLoaded = true;
            });
        });
    }
    getClusters(result) {
        let tmpClusters = [];
        let clusterNames = [];
        result.forEach(element => {
            let name = element["clusterID"];
            if (clusterNames.indexOf(name) == -1)
                clusterNames.push(name);
        });
        ///
        tmpClusters = clusterNames.map(name => {
            let tmp = {};
            tmp["id"] = "c" + name;
            tmp["label"] = "level " + name;
            tmp["childNodeIds"] = [];
            result.forEach(e => {
                if (e["clusterID"] == name)
                    tmp["childNodeIds"].push(e["id"] + "");
            });
            return tmp;
        });
        this.clusters = tmpClusters;
        console.log("clusters: ", this.clusters);
    }
    gotoDetails(id) {
        this.selectedPosition = this.positions.find(function (element, index, array) {
            return (element.position_id.toString() === id.toString());
        });
    }
};
CareerLatticeEngineeringComponent = tslib_1.__decorate([
    Component({
        selector: "app-home",
        templateUrl: "./career-lattice-engineering.component.html",
        styleUrls: ["./career-lattice-engineering.component.css"]
    })
], CareerLatticeEngineeringComponent);
export { CareerLatticeEngineeringComponent };
//# sourceMappingURL=career-lattice-engineering.component.js.map