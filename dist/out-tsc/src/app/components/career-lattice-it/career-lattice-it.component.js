import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { clusters, positions, promotions } from "../../classes/data-it";
import * as shape from 'd3-shape';
let CareerLatticeItComponent = class CareerLatticeItComponent {
    constructor(dataService, modalService) {
        this.modalService = modalService;
        this.name = 'NGX-Graph Demo';
        this.clusters = clusters;
        this.positions = positions;
        this.promotions = promotions;
        this.layoutSettings = {
            orientation: "BT"
        };
        this.layout = 'dagreCluster';
        // line interpolation
        this.curveType = 'Bundle';
        this.curve = shape.curveLinear;
        this.draggingEnabled = false;
        this.panningEnabled = false;
        this.zoomEnabled = false;
        this.autoZoom = true;
        this.autoCenter = true;
        this.data = dataService;
    }
    getPositions() {
        this.nodes = this.positions.map(position => {
            let newNode = {
                // id: position.position_id,
                id: position.position_id.toString(),
                label: position.position_name,
                dimension: {
                    width: 1000,
                    height: 250
                }
            };
            return newNode;
        });
    }
    getPromotions() {
        this.links = this.promotions.map(promotion => {
            let newEdge = {
                id: 'e' + promotion.promotion_id.toString(),
                source: promotion.start_position_id.toString(),
                target: promotion.next_position_id.toString()
            };
            return newEdge;
        });
    }
    ngOnInit() {
        this.getPositions();
        this.getPromotions();
    }
    openModal(content, id) {
        this.selectedPosition = this.positions.find(function (element, index, array) {
            return (element.position_id.toString() === id.toString());
        });
        this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
};
CareerLatticeItComponent = tslib_1.__decorate([
    Component({
        selector: 'app-career-lattice-it',
        templateUrl: './career-lattice-it.component.html',
        styleUrls: ['./career-lattice-it.component.css']
    })
], CareerLatticeItComponent);
export { CareerLatticeItComponent };
//# sourceMappingURL=career-lattice-it.component.js.map