import { Component, OnInit } from '@angular/core';
import { Name } from '../books/name';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  shirts: Name[] = [
    {
      name : 'Mumbai Shirt',
      image: 'https://th.bing.com/th/id/OIP.uIO6ImIUV01ozuDFzm62SAHaIp?pid=ImgDet&w=182&h=212&c=7',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'US Polo Tailored Shirt',
      image: 'https://www.bing.com/th?id=OPA.KHwBbm3rGlklKA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Max Men Black Shirt',
      image: 'https://www.bing.com/th?id=OPA.pkiicVs0%2bVCC%2fA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Roadster Men Shirt',
      image: 'https://www.bing.com/th?id=OPA.qRz4CnOeC9CrqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Mumbai Shirt',
      image: 'https://th.bing.com/th/id/OIP.uIO6ImIUV01ozuDFzm62SAHaIp?pid=ImgDet&w=182&h=212&c=7',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'US Polo Tailored Shirt',
      image: 'https://www.bing.com/th?id=OPA.KHwBbm3rGlklKA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Max Men Black Shirt',
      image: 'https://www.bing.com/th?id=OPA.pkiicVs0%2bVCC%2fA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Mumbai Shirt',
      image: 'https://th.bing.com/th/id/OIP.uIO6ImIUV01ozuDFzm62SAHaIp?pid=ImgDet&w=182&h=212&c=7',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'US Polo Tailored Shirt',
      image: 'https://www.bing.com/th?id=OPA.KHwBbm3rGlklKA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Max Men Black Shirt',
      image: 'https://www.bing.com/th?id=OPA.pkiicVs0%2bVCC%2fA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Roadster Men Shirt',
      image: 'https://www.bing.com/th?id=OPA.qRz4CnOeC9CrqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Mumbai Shirt',
      image: 'https://th.bing.com/th/id/OIP.uIO6ImIUV01ozuDFzm62SAHaIp?pid=ImgDet&w=182&h=212&c=7',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'US Polo Tailored Shirt',
      image: 'https://www.bing.com/th?id=OPA.KHwBbm3rGlklKA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Max Men Black Shirt',
      image: 'https://www.bing.com/th?id=OPA.pkiicVs0%2bVCC%2fA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Roadster Men Shirt',
      image: 'https://www.bing.com/th?id=OPA.qRz4CnOeC9CrqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },

  ];
ngOnInit(): void {
  
}

isInCart: boolean = false;
constructor(private cartService: CartService){

}

addToCart(men: Name){
  men.isInCart = true;
  men.removefromcart= false;
  this.cartService.add(men);
}
removeFromCart(men: Name){
  men.isInCart = false;
  men.removefromcart= true;
  this.cartService.remove(men);
}
}
