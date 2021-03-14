import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpecialityService } from '../specialties/speciality.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  private innerWidth: any;

  doctorAliasSlug;
  doctorAlias;

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
      this.doctorAlias = this._specialityService.getDoctorAliasBySlug(this.doctorAliasSlug);
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
