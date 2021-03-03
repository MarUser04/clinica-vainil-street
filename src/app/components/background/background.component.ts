import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() imgURL: string;
  @Input() secondBg: string;

  constructor() { }

  ngOnInit() {}

}
