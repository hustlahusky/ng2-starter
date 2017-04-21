import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { GcDirective } from './gc.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    GcDirective,
    TestComponent
  ],
  bootstrap: [
    AppComponent,
    // TestComponent
  ]
})
export class AppModule { }
