import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // ts
  accountName: string;
  // you can subscribe from account data service
  // step 4 of any to any comp comm -- prev step is in account data service
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    // step 4 - subscribe the observable.
    this.accountService.latestAccountName.subscribe((Name: any) => {
    console.log(name);
    this.accountName = name; // step5 - refer html for string interpolation.
    });
  }

}
