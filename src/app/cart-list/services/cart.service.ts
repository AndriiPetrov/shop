import { Product } from '../../shared/product.model';
import { Category } from '../../shared/category.enum';
import { Injectable } from '@angular/core';

let boughtProducts: Product[] = [
  {
    name: 'Tomato',
    description: 'Vegetable',
    price: 20,
    category: Category.CATEGORY1,
    isAvailable: true,
  },
  {
    name: 'Potato',
    description: 'Vegetable',
    price: 12,
    category: Category.CATEGORY2,
    isAvailable: true,
  },
  {
    name: 'Cucumber',
    description: 'Vegetable',
    price: 18,
    category: Category.CATEGORY3,
    isAvailable: false,
  },
  // {
  //   name: 'strawberry',
  //   description: 'Fruit',
  //   price: 55,
  //   category: Category.CATEGORY3,
  //   isAvailable: false,
  // },
]

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getBoughtedProduct(): Product[] {
    return boughtProducts;
  }
}
