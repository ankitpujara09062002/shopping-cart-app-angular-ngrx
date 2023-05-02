import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { shoppingCartDto } from 'src/app/models/shoppingCart.model';
import { shoppingCart } from 'src/app/store/Actions/cart.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalProducts!: any;

  constructor(private store: Store<{ shoppingCart: { shoppingCart: shoppingCartDto } }>) {
    this.store.dispatch(shoppingCart());
    this.store.select('shoppingCart').subscribe((res: any) => {
      this.totalProducts = res.addToCart
    })
  }

}
