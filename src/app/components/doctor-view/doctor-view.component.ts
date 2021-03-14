import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  private innerWidth: any;

  doctorAlias;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
  ) {}

  /* Using Subscribe */

  sub;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.doctorAlias = params.get('doctorAlias');
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
