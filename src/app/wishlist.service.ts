// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WishlistService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: any[] = [];

  addToWishlist(item: any): void {
    this.wishlistItems.push(item);
  }

  getWishlistItems(): any[] {
    return this.wishlistItems;
  }

  removeFromWishlist(item: any): void {
    const index = this.wishlistItems.findIndex(wishlistItem => wishlistItem.id === item.id);

    if (index !== -1) {
      this.wishlistItems.splice(index, 1);
    }
  }
}