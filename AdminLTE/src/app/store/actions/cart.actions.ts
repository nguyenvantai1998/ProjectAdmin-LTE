import { Action } from '@ngrx/store';
import { Item } from '../interfaces/IItem';

export const ADD_CART = '[ADD_CART] add';
export const REMOVE_CART = '[REMOVE_CART] remove';

export class AddCart implements Action {
   readonly type = ADD_CART;
   constructor(public payload: Item) {}
}

export class RemoveCart implements Action {
   readonly type = REMOVE_CART;
   constructor(public payload: number) {}
}

export type All = AddCart | RemoveCart;