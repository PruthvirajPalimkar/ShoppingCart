import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Name } from '../books/name';
// import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public totalAmount: number = 0;
  constructor(
    private cartService: CartService, // Assuming you have a CartService to fetch cart items
  ) {}
ngOnInit(): void {
  // this.totalAmount = this.cartService.calculateTotalAmount();
  this.calculateTotalAmount();
}

getCart(){
  return this.cartService.get();
}

removeFromCart(book: Name){
  // this.cartService.remove(book);
  this.cartService.removeItemFromCart(book);
  // Recalculate total amount after removing the item
  this.calculateTotalAmount();
  
}
private calculateTotalAmount(): void {
  // Calculate total amount
  this.totalAmount = this.cartService.calculateTotalAmount();
}
}
