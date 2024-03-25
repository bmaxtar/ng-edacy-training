import { Component, OnInit } from '@angular/core';
import { createProduct, createProducts } from './data/product.data';
import { SimpleProduct } from './interfaces/product';

@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  public products!: SimpleProduct[];
  public product: SimpleProduct = createProduct();

  constructor() {}

  ngOnInit() {
    this.products = createProducts(16);
  }

  isPromo(produit: SimpleProduct): boolean {
    return produit.promo;
  }

  addToCart(ev: any) {
    ev.preventDefault();
    console.log('add to cart');
    alert('Votre article a bien été ajouté au panier');
  }
}
