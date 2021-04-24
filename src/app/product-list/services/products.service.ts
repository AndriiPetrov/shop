import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/category.enum';
import { Product } from 'src/app/shared/product.model';


export const data: Product[] = [
  {
    name: 'Apple',
    description: 'Fruit',
    price: 25,
    category: Category.CATEGORY1,
    isAvailable: false,
  },
  {
    name: 'Banana',
    description: 'Fruit',
    price: 27,
    category: Category.CATEGORY2,
    isAvailable: true,
  },
  {
    name: 'Orange',
    description: 'Fruit',
    price: 32,
    category: Category.CATEGORY3,
    isAvailable: false,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return data;
  }
}
