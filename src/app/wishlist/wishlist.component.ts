// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.css']
// })
// export class WishlistComponent {

// }

import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  addToWishlist(book: any): void {
    this.wishlistService.addToWishlist(book);
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  removeFromWishlist(book: any): void {
    this.wishlistService.removeFromWishlist(book);
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }
}