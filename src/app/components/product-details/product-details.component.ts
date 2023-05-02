import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart, shoppingCart } from 'src/app/store/Actions/cart.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productDetails: any;
  orderPlaced: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<{ shoppingCart: { shoppingCart: any } }>) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.store.dispatch(shoppingCart());
      this.store.select('shoppingCart').subscribe((res: any) => {
        this.productDetails = res.productData.find((data: any) => {
          return data.id === params.id
        })
      })
    })
  }

  public addToCart(data: any) {
    this.orderPlaced = true;
    this.store.dispatch(addToCart({ value: data }));
  }

}
