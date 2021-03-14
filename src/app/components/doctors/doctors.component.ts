import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpecialityService } from '../specialties/speciality.service';
import { Speciality } from '../specialties/speciality';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  speciality: Speciality;
  specialitySlug;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _specialityService: SpecialityService,
  ) {}

  /* Using Subscribe */

  sub;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.specialitySlug = params.get('specialitySlug');
      this.speciality = this._specialityService.getSpeciality(this.specialitySlug);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['especialidades']);
  }
}
