import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpecialityService } from '../specialties/speciality.service';
import { Speciality } from '../specialties/speciality';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  private innerWidth: any;

  doctorAliasSlug;
  speciality: Speciality;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _specialityService: SpecialityService,
  ) {}

  /* Using Subscribe */

  sub;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.doctorAliasSlug = params.get('doctorAliasSlug');
      let specialities = this._specialityService.getSpecialities();
      this.speciality = specialities.find((p) => this.slugify(p.doctorAlias) == this.doctorAliasSlug);
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
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
}
