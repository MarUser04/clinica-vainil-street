import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private currentSelection: string = 'Junta Directiva';
  private currentSelectionIcon: string = 'fas fa-user-cog';

  constructor() { }

  ngOnInit() {
  }

  public changeSelected(newSelected: string, newIcon: string): void {
    this.currentSelection = newSelected;
    this.currentSelectionIcon = newIcon;
  }

}
