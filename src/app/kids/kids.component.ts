import { Component, OnInit } from '@angular/core';
import { Name } from '../books/name';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  kids: Name[] = [
    {
      name : '2-piece cotton jersey set',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd8%2F66%2Fd86627c843e51372fa3644ab24b4e5b45dc356de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 1800,
      isInCart: false,
      removefromcart: false,
    },

    {
      name : 'Light blue/Dark blue',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F06%2Fcc06301d15b3a28a7e94fd201e9c27973a830d99.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4000,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Dark grey/Pinstriped',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2F42%2F52423ca6eef7edeb0a47b4e1b9b1e291fa5ab8ee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_setsoutfits%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 3700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'White/Light green',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2Ff5%2Fbef5bc3709c21ae60d4f60fc026f05eceaa2007c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Dark blue/Dinosaur',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F5b%2F6d5b01e1005bd61d37ca883656f1c4105acd7291.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 1800,
      isInCart: false,
      removefromcart: false,
    },

    {
      name : 'Light grey marl/Excavators',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fb2%2F7fb24c5e4f964906897b46c98b67b6c993c56d11.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4000,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Brown/Skate Vibe',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe7%2F8b%2Fe78b7a7899ef495897e7f334dcaae8caf13819bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 3700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Light beige/Level Up',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F84%2F03%2F84039f94d55480d458349cc48a07e16950ac8dc8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'White/Light green',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2Ff5%2Fbef5bc3709c21ae60d4f60fc026f05eceaa2007c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Dark blue/Dinosaur',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F5b%2F6d5b01e1005bd61d37ca883656f1c4105acd7291.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 1800,
      isInCart: false,
      removefromcart: false,
    },

    {
      name : 'Light grey marl/Excavators',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fb2%2F7fb24c5e4f964906897b46c98b67b6c993c56d11.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 4000,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Brown/Skate Vibe',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe7%2F8b%2Fe78b7a7899ef495897e7f334dcaae8caf13819bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      amount: 3700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Light beige/Level Up',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F84%2F03%2F84039f94d55480d458349cc48a07e16950ac8dc8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
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

addToCart(kid: Name){
  kid.isInCart = true;
  kid.removefromcart= false;
  this.cartService.add(kid);
}
removeFromCart(kid: Name){
  kid.isInCart = false;
  kid.removefromcart= true;
  this.cartService.remove(kid);
}
}


