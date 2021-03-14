import { Component, OnInit } from '@angular/core';

import { SpecialityService } from './speciality.service';
import { Speciality } from './speciality';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss'],
})
export class SpecialtiesComponent implements OnInit {
  specialities: Speciality[];
  constructor(private specialityService: SpecialityService) {}

  ngOnInit() {
    this.specialities = this.specialityService.getSpecialities();
  }
}
