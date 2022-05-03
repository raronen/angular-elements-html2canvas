import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  template: `
  <img #image src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
  <br>
  <button (click)="AddImage()">Add image to document</button>
  `,
})
export class AppComponent {
  @ViewChild('image') image!: ElementRef;
  constructor() {
    // // Convert `PopupComponent` to a custom element.
    // const PopupElement = createCustomElement(PopupComponent, { injector });
    // // Register the custom element with the browser.
    // customElements.define('popup-element', PopupElement);
    // html2canvas(document.body).then(function (canvas: any) {
    //   document.body.appendChild(canvas);
    // });
  }

  AddImage() {
    html2canvas(this.image.nativeElement).then(function (canvas: any) {
      document.body.appendChild(canvas);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
