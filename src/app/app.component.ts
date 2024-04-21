import { Component } from '@angular/core';
import { TabComponent } from './shared/tab/tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabComponent],
  template: 
  `
  <app-tab></app-tab>
  `,
  styles: [],
})
export class AppComponent {
  title = 'to-do-list';
}
