import {
  Component,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

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
  public showMenu: boolean = true;
  private showMenuButton: boolean = false;
  public clickListener: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.showMenu = false;
      this.showMenuButton = true;
    } else {
      this.showMenu = true;
      this.showMenuButton = false;
    }

    this.clickListener = this.renderer.listen('document', 'click', (e: any) => {
      if (!e.target.className.includes('menu')) {
        this.subMenuActive = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.clickListener();
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

  public subMenu() {
    this.subMenuActive = !this.subMenuActive;
  }

  public showMenuEvent() {
    this.showMenu = !this.showMenu;
  }
}
