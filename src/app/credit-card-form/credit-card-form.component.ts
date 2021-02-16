import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreditCard } from '../models/creditCardModel';
import * as CreditCardActions from '../action'
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  creditCard: CreditCard;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      cardNo: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expiryDate: ['', [Validators.required, this.dateChecker]],
      ccv: ['', [Validators.maxLength(3), Validators.minLength(3)]],
      amount: [0, [Validators.required, Validators.min(1)]]
    })
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    console.log("ERR*******", this.registrationForm.controls);
    this.submitted = true;
    this.creditCard = this.registrationForm.getRawValue();
    if (this.registrationForm.invalid) {
      return;
    }
    this.paymentService.makePayment(this.creditCard).subscribe(data => {
      alert('SUCCESS!!!');
    }, (err => {
      alert(err.statusText);
    }))
    this.store.dispatch(new CreditCardActions.AddCreditCard(this.creditCard));
    this.router.navigateByUrl('');
  }

  dateChecker(expiryDate: AbstractControl) {
    let currentDate = new Date();
    let rExpiryDate = new Date(expiryDate.value);
    if (currentDate >= rExpiryDate) {
      return { response: true };
    }
    return null;
  }


}
