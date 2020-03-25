import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PositionComponent } from './components/position/position.component';
import { HomeItComponent } from './components/home-it/home-it.component';

const routes: Routes = [
  {
    path: "engineering",
    component: HomeComponent,
  },
  {
    path: "it",
    component: HomeItComponent
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

// ,
//   {
//     path: "home/:username",
//     component: HomeComponent,
//     data: { capabilityTitle: "All capabilities", familyID: "0" }
//   },
