import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    SpecialtiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
