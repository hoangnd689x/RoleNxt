import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerLatticeEngineeringComponent } from "./components/career-lattice-engineering/career-lattice-engineering.component";
import { PositionComponent } from './components/position/position.component';
import { CareerLatticeItComponent } from './components/career-lattice-it/career-lattice-it.component';
import { HomeComponent } from './components/home/home.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';

const routes: Routes = [
  {
    path: ":id/position",
    component: CareerLatticeEngineeringComponent,
  },
  {
    path: "position-details/:id",
    component: PositionDetailComponent,
  },
  {
    path: "it",
    component: CareerLatticeItComponent
  },
  {
    path: '',
    component: HomeComponent
  }
  ,
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
