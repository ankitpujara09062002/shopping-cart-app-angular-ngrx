import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { shoppingCartDto } from 'src/app/models/shoppingCart.model';
import { addToCart, shoppingCart } from 'src/app/store/Actions/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  shoppingData: Array<shoppingCartDto> = []

  constructor(private store: Store<{ shoppingCart: { shoppingCart: shoppingCartDto } }>, private router: Router) {
    this.store.dispatch(shoppingCart());
    this.store.select('shoppingCart').subscribe((res: any) => {
      this.shoppingData = res.productData
    })
  }

  public addToCart(data: any) {
    this.store.dispatch(addToCart({ value: data }));
  }

  public productDetails(data: any) {
    this.router.navigate(['product-details'], { queryParams: { id: data.id } })

  }

}
