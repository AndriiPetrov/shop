
import { Product } from '../shared/product.model';
import { Category } from '../shared/category.enum';
import { Component, OnInit } from '@angular/core';
import { data } from '../product-list/services/products.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  name = 'Andrew';
  description = 'Developer';
  price = 1500;
  category: Category = Category.CATEGORY4;
  isAvailable = false;

  workers: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.workers = data;
  }

}
