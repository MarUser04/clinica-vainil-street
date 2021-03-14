import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { InternshipComponent } from './components/internship/internship.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { AboutComponent } from './components/about/about.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SpecialityService } from './components/specialties/speciality.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    SpecialtiesComponent,
    DoctorViewComponent,
    InternshipComponent,
    PharmacyComponent,
    JoinUsComponent,
    InternshipComponent,
    AboutComponent,
    MedicineComponent,
    LaboratoryComponent,
    DoctorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SpecialityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
