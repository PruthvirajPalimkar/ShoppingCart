import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from './auth/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Router } from '@angular/router';
// import { authGuard } from './auth.guard';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLoggedIn = false;
    public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  isLoading: boolean = false;

  constructor(private router: Router){

  }


  login(form: LoginForm){
    
    if(this.isLoading) return;

    this.isLoading = true;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in 
      this.isLoggedIn = true;
      this.router.navigate(['']);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isLoggedIn = false;
      // alert('Credential does not match our record.');
    })
    .finally(() => this.isLoading = false);
  }
  passwordMatched: boolean = true;

  register(form: RegisterForm){
    if(this.isLoading)  return;
    this.isLoading = true;

    if(form.password !== form.confirm_password){
      this.passwordMatched = false;
      return;
    }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isLoggedIn = true;
  })
  .catch((error) => {
    this.isLoggedIn = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  .finally(() => (this.isLoading = false));
  }
  logout(){
    const auth = getAuth();
    signOut(auth)
    .then(() => {
        this.router.navigate(['login']);
        this.isLoggedIn = false;
      })
      .catch((error)=>{
  
      });  
  }
}