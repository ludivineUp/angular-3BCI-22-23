import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyComponent } from './pony/pony.component';
import { RaceLocationPipe } from './race-location.pipe';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { FakeAuthFormComponent } from './fake-auth-form/fake-auth-form.component';
import { AddPonyReactiveComponent } from './add-pony-reactive/add-pony-reactive.component';
import { ErrorRoutingPageComponent } from './error-routing-page/error-routing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuardService} from "./auth-guard.service";
import {AuthenticationService} from "./authentication.service";
import {PonyService} from "./pony.service";
import {RaceService} from "./race.service";

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyComponent,
    RaceLocationPipe,
    AddPonyComponent,
    AddRaceComponent,
    FakeAuthFormComponent,
    AddPonyReactiveComponent,
    ErrorRoutingPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    PonyService,
    RaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
