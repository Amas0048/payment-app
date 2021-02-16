
import { CreditCard } from '../models/creditCardModel';
import * as CreditCardActions from '../action'


const initialState: CreditCard = {
  cardNo: '',
  cardHolder: '',
  expiryDate: null,
  ccv: '',
  amount: null
}

export function reducer(state: CreditCard[] = [initialState], action: CreditCardActions.Actions) {
  switch (action.type) {
    case CreditCardActions.ADD_CREDITCARD:
      return [...state, action.payload];
    default:
      return state;
  }
}


