// import { Component, OnInit } from '@angular/core';
// import { LoginForm } from '../auth/auth';
// import { AuthService } from '../auth.service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{

//   form: LoginForm = {
//     email: '',
//     password: '',
//   };

 

//   constructor(private authService: AuthService) {
//   }

// ngOnInit(): void {
    
// }
// submit(){

//   this.authService.login(this.form)
// }

// isLoading(){
//   return this.authService.isLoading;
// }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
import { LoginForm } from '../auth/auth';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

 
// isLoading: boolean = false;

  constructor(private authService: AuthService) {
  }

ngOnInit(): void {
    
}

submit(){
  this.authService.login(this.form);
}

isLoading(){
  return this.authService.isLoading;
}

}