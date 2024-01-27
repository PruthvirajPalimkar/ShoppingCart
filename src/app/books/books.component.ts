import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Name } from './name';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Name[] = 
  [
    {
      name: 'Data Science Programming All in One for Dummies',
      image: 
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0QfMqcwYevn69MnjG2qplMxwzdgbHcg16vJP_UK3M5L3uYTUsNyaXpJ-ZT2Z_okhcPNgnPGpPkJA4uIkVKmey1XoPcJ1vwOciM8_QqJbOgnLb7Nv_9_XT',
      amount: 959,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'The Self-taught Programmer',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_52tG2fkTcSdraINt4C4UsBt1_rwo8Jtpv8T1USOHGA-A0NKw9TcUva9qeb2dUN73WDIY8HdSMmjuhyKTHxvA9K2eBXbz9ZFhyG6g_RTYeSXmcs8ciqVq&usqp=CAE',
      amount: 1160,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'JavaScript: The Definitive Guide - Master the Worlds Most-Used Programming Language, Seventh Edition',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmAbX554kotQBcFlwVppK6G7ux5ePOq9NjzIltDltEwoeiODhOdGnUDsOvCmVg6Eb-FuKzpXdeKKH3oCC3BiHzsB-ExU7NkfhU52hizNEO2-6KUOgsSKM9',
      amount: 2200,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'Coding All-in-one For Dummies, 2nd Edition',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPZ0oCJkHO4bGNilb9-203s5xqyBUdmo3LxXX2GowAlGTPjr_DTcfnexRFbjQmYnevzZzl7UuEn8KN-fHt25KuWOPmR7cyFOW87h8d8MglZ-0qq05dpAdF',
      amount: 1600,
      isInCart: false,
      removefromcart: false,
    },
    {
      name: 'clean code',
      image: 
      'https://th.bing.com/th/id/R.2aca70dfbdcef936cb99c63497be7dd3?rik=D04BpW2HTTDPCQ&riu=http%3a%2f%2fbilder.buecher.de%2fprodukte%2f23%2f23888%2f23888404z.jpg&ehk=LGJoVKaZqoLi7Tsi1CLbsBesvJaHELADizXLRyjdXlA%3d&risl=&pid=ImgRaw&r=0',
      amount: 1900,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'pragmatic programmer',
      image: 'https://th.bing.com/th/id/OIP.qj6BQ0g14hMcS78qxOl9iwHaJp?w=145&h=190&c=7&r=0&o=5&pid=1.7',
      amount: 2000,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'art of computer programming',
      image: 'https://th.bing.com/th/id/R.3507c8ec42c79fcbd7e511c2e6adf94c?rik=K5wQAk%2bmnjscxA&riu=http%3a%2f%2fwww.informit.com%2fShowCover.aspx%3fisbn%3d0201896834&ehk=sPbm7kj4Nbd6RTEwx08Amc8tribknB3uEiv2zll5QN0%3d&risl=&pid=ImgRaw&r=0',
      amount: 3700,
      isInCart: false,
      removefromcart: false,
    },
    {
      name : 'introduction to algorithm',
      image: 'https://i.pinimg.com/originals/a8/3d/ad/a83dad43d39d0c56421f835ec927863a.jpg',
      amount: 4700,
      isInCart: false,
      removefromcart: false,
    },

];

// card: Book[] = [];


constructor(private cartService: CartService){

}

addToCart(book: Name){
  book.isInCart = true;
  book.removefromcart= false;
  this.cartService.add(book);
}
removeFromCart(book: Name){
  book.isInCart = false;
  book.removefromcart= true;
  this.cartService.remove(book);
}
// logArrayItems(): void{
//   for (const item of this.books){
//     console.log(item);
//   }
// }

ngOnInit(): void{
 
}
}

