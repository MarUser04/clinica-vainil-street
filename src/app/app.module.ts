import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { InternshipComponent } from './components/internship/internship.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    SpecialtiesComponent,
    DoctorViewComponent,
    InternshipComponent,
    PharmacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
