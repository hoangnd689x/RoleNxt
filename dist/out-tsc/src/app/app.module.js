import * as tslib_1 from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CareerLatticeEngineeringComponent } from "./components/career-lattice-engineering/career-lattice-engineering.component";
import { MainComponent } from "./components/main/main.component";
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { PositionComponent } from './components/position/position.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CareerLatticeItComponent } from './components/career-lattice-it/career-lattice-it.component';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { HomeComponent } from './components/home/home.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { LinksComponent } from './components/admin/links/links.component';
import { LinksChildComponent } from './components/admin/links-child/links-child.component';
// import material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            NavbarComponent,
            CareerLatticeEngineeringComponent,
            MainComponent,
            PositionComponent,
            CareerLatticeItComponent,
            ReversePipePipe,
            HomeComponent,
            PositionDetailComponent,
            LinksComponent,
            LinksChildComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            NgxGraphModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatGridListModule,
            MatCardModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map