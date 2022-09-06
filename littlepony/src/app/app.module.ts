import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyComponent } from './pony/pony.component';
import { RaceLocationPipe } from './race-location.pipe';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { FakeAuthFormComponent } from './fake-auth-form/fake-auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyComponent,
    RaceLocationPipe,
    AddPonyComponent,
    AddRaceComponent,
    FakeAuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
