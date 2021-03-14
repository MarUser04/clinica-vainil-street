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
  slug;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _specialityService: SpecialityService,
  ) {}

  /* Using Subscribe */

  sub;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.slug = params.get('slug');
      let specialities = this._specialityService.getSpecialities();
      this.speciality = specialities.find((p) => p.slug == this.slug);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['especialidades']);
  }
}
