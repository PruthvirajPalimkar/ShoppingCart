import { Component, OnInit } from '@angular/core';
import { Name } from '../books/name';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  womens: Name[] = [
    {
      name : 'PUMA Full-Zip Womens Regular Fit Hooded Jacket',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/670381/06/mod01/fnd/IND/fmt/png/PUMA-Full-Zip-Womens-Regular-Fit-Hooded-Jacket',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'To The Max High Impact Womens Sports Bra',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/521035/01/mod01/fnd/IND/fmt/png/To-The-Max-High-Impact-Womens-Sports-Bra',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'RUN FAVORITE Womens Tee',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/525228/25/mod01/fnd/IND/fmt/png/RUN-FAVORITE-Womens-Tee',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'RUN FAVORITE Womens printed Tee',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/525307/01/mod01/fnd/IND/fmt/png/RUN-FAVORITE-Printed-Womens-Tee',
      amount: 4700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Readymade Saree Blouse',
      image: 'https://th.bing.com/th?id=OPA.4g7WM5M%2f8fSPMg474C474&w=592&h=550&o=5&pid=21.1',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'Zara Top',
      image: 'https://static.zara.net/photos///2023/I/0/1/p/1856/916/303/2/w/563/1856916303_1_1_1.jpg?ts=1695977303087',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Mustard Yellow Ethnic Maxi Dress',
      image: 'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Maroon Embroidered Detail Anarkali Festive Gown',
      image: 'https://th.bing.com/th?id=OPA.R7Q5TdcTUMhFWw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 4700,
      isInCart: false,
    removefromcart: false,
    },
        {
      name : 'Readymade Saree Blouse',
      image: 'https://th.bing.com/th?id=OPA.4g7WM5M%2f8fSPMg474C474&w=592&h=550&o=5&pid=21.1',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'Zara Top',
      image: 'https://static.zara.net/photos///2023/I/0/1/p/1856/916/303/2/w/563/1856916303_1_1_1.jpg?ts=1695977303087',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Mustard Yellow Ethnic Maxi Dress',
      image: 'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Maroon Embroidered Detail Anarkali Festive Gown',
      image: 'https://th.bing.com/th?id=OPA.R7Q5TdcTUMhFWw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 4700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Readymade Saree Blouse',
      image: 'https://th.bing.com/th?id=OPA.4g7WM5M%2f8fSPMg474C474&w=592&h=550&o=5&pid=21.1',
      amount: 1800,
      isInCart: false,
    removefromcart: false,
    },

    {
      name : 'Zara Top',
      image: 'https://static.zara.net/photos///2023/I/0/1/p/1856/916/303/2/w/563/1856916303_1_1_1.jpg?ts=1695977303087',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Mustard Yellow Ethnic Maxi Dress',
      image: 'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Maroon Embroidered Detail Anarkali Festive Gown',
      image: 'https://th.bing.com/th?id=OPA.R7Q5TdcTUMhFWw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },
        {
      name : 'Readymade Saree Blouse',
      image: 'https://th.bing.com/th?id=OPA.4g7WM5M%2f8fSPMg474C474&w=592&h=550&o=5&pid=21.1',
      amount: 1800,
      isInCart: false,
      removefromcart: false,
    },

    {
      name : 'Zara Top',
      image: 'https://static.zara.net/photos///2023/I/0/1/p/1856/916/303/2/w/563/1856916303_1_1_1.jpg?ts=1695977303087',
      amount: 4000,
      isInCart: false,
    removefromcart: false,
    },
    {
      name : 'Women Mustard Yellow Ethnic Maxi Dress',
      image: 'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1',
      amount: 3700,
      isInCart: false,
    removefromcart: false,
    },
  ];
ngOnInit(): void {
  
}

isInCart: boolean = false;
constructor(private cartService: CartService){

}

addToCart(women: Name){
  women.isInCart = true;
  women.removefromcart= false;
  this.cartService.add(women);
}
removeFromCart(women: Name){
  women.isInCart = false;
  women.removefromcart= true;
  this.cartService.remove(women);
}
}



