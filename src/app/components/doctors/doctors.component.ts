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

  slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['especialidades']);
  }
}
