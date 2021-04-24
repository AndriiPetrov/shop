import { CartService } from './services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() avocado: any;

  basket: any = [];
  isBasketNotEmpty = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.avocado);
    this.basket = this.cartService.getBoughtedProduct();
    if (this.basket.length > 1) {
      this.isBasketNotEmpty = true;
    }
  }

  trackByProduct(index: number, product: Product): string {
    return product.name;
  }



}
