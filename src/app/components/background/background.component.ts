import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() imgURL: string;
  @Input() secondBg: string;
  private subMenuActive: boolean;

  constructor() {}

  ngOnInit() {}

  public subMenu() {
    this.subMenuActive = !this.subMenuActive;
  }
}
