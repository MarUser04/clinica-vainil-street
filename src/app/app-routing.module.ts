import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'especialidades', component: SpecialtiesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
