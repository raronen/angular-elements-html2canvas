import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  template: `
  <h1 #t>Title<h1>
  <button (click)="AddImage()">Add title to document</button>
  `,
})
export class AppComponent {
  @ViewChild('t') title!: ElementRef;
  constructor(private elementRef: ElementRef) {}

  public AddImage() {
    const ne = this.elementRef.nativeElement;
    html2canvas(this.title.nativeElement).then(function (canvas: any) {
      console.log(canvas);
      ne.appendChild(canvas);
    });
  }
}
