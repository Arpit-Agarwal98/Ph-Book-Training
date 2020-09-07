import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step1 : create custom event -- create an obj for eventEmitter
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>(); // step2 : @Output() will make profileLoaded a custom event.
  constructor() { }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // ideal place for ajax calls/emitting events
  }

  sendDataHandler(): void{
    // step3 -- Emit the custom event.
    this.profileLoaded.emit('Arpit'); // step4 - Sending 'Arpit' to parent comp.
  }
}
