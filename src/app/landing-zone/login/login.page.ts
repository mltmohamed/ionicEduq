import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Connexion avec:', { email: this.email, password: this.password });
      // À implémenter : logique de connexion (ex. API call)
      this.router.navigate(['/admin']); // Redirige vers admin (ajuste la route)
    }
  }

  isFormValid(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== '';
  }

  goToForgotPassword() {
    console.log('Redirection vers la page Mot de passe oublié');
    // this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
