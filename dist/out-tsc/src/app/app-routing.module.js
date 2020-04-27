import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CareerLatticeEngineeringComponent } from "./components/career-lattice-engineering/career-lattice-engineering.component";
import { HomeComponent } from './components/home/home.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { LinksComponent } from './components/admin/links/links.component';
const routes = [
    {
        path: "position/:id",
        component: CareerLatticeEngineeringComponent,
    },
    {
        path: "position-details/:id",
        component: PositionDetailComponent,
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: "admin/links/:id",
        component: LinksComponent,
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map