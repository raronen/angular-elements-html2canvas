import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [AppComponent],
})
export class AppModule implements DoBootstrap {
  public constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('app-root-custom-element', webComponent);
  }

  public ngDoBootstrap(): void {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
