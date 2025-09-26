// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonMenu, 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonList, 
  IonMenuToggle, 
  IonItem, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  peopleOutline, 
  cashOutline, 
  walletOutline, 
  settingsOutline, 
  logOutOutline,
  folderOpenOutline,   // ← ajoute ça
  statsChartOutline   
  } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp, 
    IonRouterOutlet, 
    IonMenu, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonList, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel,
    RouterModule
  ],
})
export class AppComponent implements OnInit {
  menuItems = [
    { title: 'Accueil', path: '/dashboard', icon: 'homeOutline' },
    { title: 'Enfants', path: '/children', icon: 'peopleOutline' },
    { title: 'Paiements', path: '/payments', icon: 'cashOutline' },
    { title: 'Dépenses', path: '/expenses', icon: 'walletOutline' },
    { title: 'Paramètres', path: '/settings', icon: 'settingsOutline' },
    { title: 'Statistiques', path: '/statistics', icon: 'statsChartOutline' }
  ];

  constructor(private router: Router) {
    addIcons({ homeOutline, peopleOutline, cashOutline, walletOutline, settingsOutline, logOutOutline, folderOpenOutline,statsChartOutline });
  }

  ngOnInit() {
    // Debug navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigation completed to:', event.url);
    });
  }

navigateTo(path: string) {
    this.router.navigate([path]);  // navigation Angular
  }

  logout() {
    console.log('Logout clicked');
    // TODO: Implement logout logic
    // Example: this.authService.logout();
  }
}