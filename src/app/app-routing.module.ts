import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerLatticeEngineeringComponent } from "./components/career-lattice-engineering/career-lattice-engineering.component";
import { PositionComponent } from './components/position/position.component';
import { CareerLatticeItComponent } from './components/career-lattice-it/career-lattice-it.component';
import { HomeComponent } from './components/home/home.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { LinksComponent } from './components/admin/links/links.component';

const routes: Routes = [
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
    path: "admin/links/:id", // manage links by department
    component: LinksComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
