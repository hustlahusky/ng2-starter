import { Component } from '@angular/core';
import $ from './lib/jquery';

@Component({
  selector: 'test-component',
  template: `
    <h2>test</h2>
  `
})
export class TestComponent {
  constructor() {
    console.log($('body'));
  }
}
