import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public currentSelection = 'Junta Directiva';
  public currentSelectionIcon = 'fas fa-user-cog';

  constructor() {}

  ngOnInit() {}

  public changeSelected(newSelected: string, newIcon: string): void {
    this.currentSelection = newSelected;
    this.currentSelectionIcon = newIcon;
  }
}
