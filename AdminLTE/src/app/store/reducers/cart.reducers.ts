import * as MyCart from './../actions/cart.actions';
import { Item } from '../interfaces/IItem';


export function reducer( state: Item[] = [], action: MyCart.All) {
   console.log(action.type, state);
   switch (action.type) {
      case MyCart.ADD_CART:
         console.log(action.payload);
         return [...state, action.payload];
      case MyCart.REMOVE_CART:
         console.log(action.payload);
         state.splice(action.payload, 1);
         return state;
      default:
         return state;
   }
}
