import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class='text-center'>
    <hr>
    <app-menu1>
    <li class="nav-item">
        <a class="nav-link" href="#">Back to top</a>
    </li>
    </app-menu1>
    <p>Copyright | Arpit</p>
  </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
