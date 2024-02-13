import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @ViewChild('rotateElement', {static: false}) rotateElement: ElementRef;
  rotate = false

  constructor() { }

  toggleRotate() {
    this.rotate = true
    setTimeout(() => {
      this.rotate = false
    },  1000)
  }
}
