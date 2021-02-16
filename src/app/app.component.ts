import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { CreditCard } from './models/creditCardModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  creditCards: Observable<CreditCard[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.creditCards = this.store.select('creditCard');
  }



  goToPayment() {
    this.router.navigateByUrl('/form');
  }
}
