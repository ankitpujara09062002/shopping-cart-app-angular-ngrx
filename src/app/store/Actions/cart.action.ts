import { createAction, props } from "@ngrx/store";

export const shoppingCart = createAction('Shopping Cart Data');

export const addToCart = createAction('addToCart', props<{ value: any }>());

export const removeFromCart = createAction('removeFromCart', props<{ value: any }>());

export const removeAllProducts = createAction('removeAllProducts');

