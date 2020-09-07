import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // Exposed in Selector -- Element Selector -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'ph-book';
}
