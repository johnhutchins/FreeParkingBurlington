import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HowToComponent } from './how-to/how-to.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "map", component: MapComponent},
      { path: '', redirectTo: "map", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
