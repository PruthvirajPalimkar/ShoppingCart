import { Injectable } from '@angular/core';
import { Name } from './books/name';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Name> = [];


  add(book: Name){
    this.cart.push(book);
  }

  get(){ 
    return this.cart;
  }

  remove(book: Name){
    this.cart = this.cart.filter((b) => b != book );
  }
  calculateTotalAmount(): number {
    return this.cart.reduce((total, book) => total + book.amount, 0);
  }
  // Use this method in your template to check if the user is logged in

  removeItemFromCart(book: any): void {
    const index = this.cart.findIndex((cart) => cart.name === book.name);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
