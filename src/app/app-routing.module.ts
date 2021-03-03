import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctor', component: DoctorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
