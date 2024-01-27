import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLoggedIn: boolean = false;
  title = 'ShoppingCart';
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }


  public isUserLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() { 
    this.authService.logout();
  }
}
