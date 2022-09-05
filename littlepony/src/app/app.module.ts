import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyComponent } from './pony/pony.component';
import { RaceLocationPipe } from './race-location.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyComponent,
    RaceLocationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
