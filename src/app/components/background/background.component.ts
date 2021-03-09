import { Component, HostListener, Input, OnInit } from '@angular/core';

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
  private innerWidth: any;
  private showMenu: boolean = true;
  private showMenuButton: boolean = false;

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.showMenu = false;
      this.showMenuButton = true;
    } else {
      this.showMenu = true;
      this.showMenuButton = false;
    }
  }

  public subMenu() {
    this.subMenuActive = !this.subMenuActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.showMenu = false;
      this.showMenuButton = true;
    } else {
      this.showMenu = true;
      this.showMenuButton = false;
    }
  }

  public showMenuEvent() {
    this.showMenu = !this.showMenu;
  }
}
