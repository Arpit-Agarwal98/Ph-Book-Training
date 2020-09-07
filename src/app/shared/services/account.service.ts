import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Step 1:
  private accountName = 'Arpit';

  // Step 2: Create BehaviourSubject with default value.
  // for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create Observable for the BehaviousSubject..
  // so any component can subscribe it
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  // refer header.comp.ts for step 4

  constructor() { }

  updateAccountName(newName): void{
    console.log(newName);
    // updating the name with the newName
    this.myAccount.next(newName);
  }
}
