import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { shoppingCartDto } from 'src/app/models/shoppingCart.model';
import { removeAllProducts, removeFromCart } from 'src/app/store/Actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartData!: shoppingCartDto | any;
  orderPlaced: boolean = false;

  constructor(private store: Store<{ shoppingCart: { shoppingCart: shoppingCartDto } }>, private router: Router) {
    this.store.select('shoppingCart').subscribe((res: any) => {
      this.cartData = res.addToCart
    })
  }

  public placeOrder() {
    this.orderPlaced = true;
    setTimeout(() => {
      this.router.navigate(['home']);
      this.store.dispatch(removeAllProducts());
    }, 2000);
  }

  public removeItem(data: any) {
    this.store.dispatch(removeFromCart(data));
  }

}
