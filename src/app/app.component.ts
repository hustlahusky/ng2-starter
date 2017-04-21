import { Component } from '@angular/core';
import UIkit from './lib/uikit';

@Component({
  selector: 'my-app',
  template: `
    <main>
      <h1>Hello from Angular App with Webpack</h1>
    </main>
    <test-component>olol</test-component>
  `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    UIkit.notification('AppComponent loaded!');
  }
}
