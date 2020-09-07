import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    '.greenText {color:green}'
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation
  appName = 'Phone Book App!';
  exp = 20;

  // property binding
  companyName = 'L & T Constructions';
  isLoggedIn = true;

  // Two way binding
  courseName = 'App Binding';

  // custom event related
  profileName: any;

  skillList: string[] = ['html', 'css', 'js'];

  @ViewChild('pRef', {static: false}) pRef: ElementRef;
  @ViewChild(CebComponent, {static: false}) cebData: any;

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number{
    return this.exp;
  }

  // property binding related
  isAuth(): boolean{
    return !this.isLoggedIn;
  }

  clickHandler(evt): void{
    console.log(evt);
    alert('clicked');
  }

  // step6 in CEB
  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }

}
