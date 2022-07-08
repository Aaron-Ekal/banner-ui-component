import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { ProjectPitchesComponent } from './component/project-pitches/project-pitches.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProjectPitchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
