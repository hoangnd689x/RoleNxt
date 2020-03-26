import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerLatticeEngineeringComponent } from "./components/career-lattice-engineering/career-lattice-engineering.component";
import { PositionComponent } from './components/position/position.component';
import { CareerLatticeItComponent } from './components/career-lattice-it/career-lattice-it.component';

const routes: Routes = [
  {
    path: "engineering",
    component: CareerLatticeEngineeringComponent,
  },
  {
    path: "it",
    component: CareerLatticeItComponent
  },
  {
    path: '',
    redirectTo: '/engineering',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
