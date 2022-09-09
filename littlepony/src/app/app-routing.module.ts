import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PoniesComponent} from "./ponies/ponies.component";
import {PonyComponent} from "./pony/pony.component";
import {ErrorRoutingPageComponent} from "./error-routing-page/error-routing-page.component";
import {AddRaceComponent} from "./add-race/add-race.component";
import {RacesComponent} from "./races/races.component";
import {AddPonyReactiveComponent} from "./add-pony-reactive/add-pony-reactive.component";
import {AuthGuardService} from "./auth-guard.service";
import {FakeAuthFormComponent} from "./fake-auth-form/fake-auth-form.component";
import {AddPonyComponent} from "./add-pony/add-pony.component";

const routes: Routes = [
  // Route de base (arrivée sur le site)
  { path: '', component: PoniesComponent},
  // Route vers un component particulier
  { path: 'add-pony-reactive', component: AddPonyReactiveComponent},
  { path: 'add-pony', component: AddPonyComponent, canActivate: [AuthGuardService]},
  { path: 'update-pony/:id', component: AddPonyComponent, canActivate: [AuthGuardService]},
  { path: 'add-race', component: AddRaceComponent},
  { path: 'races', component: RacesComponent},
  { path: 'auth', component: FakeAuthFormComponent},
  // Route avec un paramètre
  { path: 'pony/:id', component: PonyComponent},
  // Route redirigeant vers l'accueil/404 en cas de mauvais url
  { path: '**', component: ErrorRoutingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
