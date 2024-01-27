import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor() { }

  ngOnInit(): void {
  }

  images = [
    'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1',
    'https://www.bing.com/th?id=OPA.qRz4CnOeC9CrqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1',
    'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F06%2Fcc06301d15b3a28a7e94fd201e9c27973a830d99.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    // Add more image URLs as needed
  ];

  currentImageIndex = 0;

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPrevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
  featuredProducts = [
    { name: 'Kids Clothes', imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F06%2Fcc06301d15b3a28a7e94fd201e9c27973a830d99.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', price: 4000 },
    { name: 'Women Clothes', imageUrl: 'https://th.bing.com/th?id=OPA.gAqioG6%2fRhY0%2fw474C474&w=160&h=213&c=17&pid=21.1', price: 1500 },
    { name: 'Men Clothes', imageUrl: 'https://www.bing.com/th?id=OPA.qRz4CnOeC9CrqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1', price: 2000 },
  ];
  categories = ['men clothes','women clothes','kids clothes','Books'];
}
