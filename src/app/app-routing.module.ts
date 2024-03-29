import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { InternshipComponent } from './components/internship/internship.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { AboutComponent } from './components/about/about.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { DoctorsComponent } from './components/doctors/doctors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'especialidades', component: SpecialtiesComponent },
  { path: 'especialidades/:specialitySlug/:doctorAliasSlug', component: DoctorViewComponent },
  { path: 'unete', component: JoinUsComponent },
  { path: 'pasantias', component: InternshipComponent },
  { path: 'farmacia', component: PharmacyComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'medicina', component: MedicineComponent },
  { path: 'laboratorio', component: LaboratoryComponent },
  { path: 'especialidades/:specialitySlug', component: DoctorsComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
