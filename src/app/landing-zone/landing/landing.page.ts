import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { Router, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkActive, RouterModule]
})
export class LandingPage implements OnInit {

  constructor(private router: Router) {}

  goToLogin() {
    console.log('Redirection vers la page de connexion');
    this.router.navigate(['/login']); 
  }

  goToRegister() {
    // À implémenter : navigation vers une page d'inscription (ex. /register)
    console.log('Redirection vers la page d\'inscription');
    // this.router.navigate(['/register']); // Décommente et ajuste la route si tu crées une page register
  }

  ngOnInit() {
  }

}
