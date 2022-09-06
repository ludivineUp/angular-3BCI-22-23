import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    AddPonyReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
