import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCardModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  makePayment(cardDetails: CreditCard){
    return this.http.post('/pay', cardDetails);
  }
}
