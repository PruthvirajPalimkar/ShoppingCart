import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { AuthService } from '../auth.service';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  passwordMatched: boolean = true;
  // isLoading: boolean = false;
  
  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    
  }


  submit(){
    this.authService.register(this.form)
  }
  isLoading(){
    return this.authService.isLoading;
  }
}

