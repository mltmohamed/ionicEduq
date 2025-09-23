import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { homeOutline, peopleOutline, cashOutline, walletOutline, settingsOutline, logOutOutline } from 'ionicons/icons';

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
export class AppComponent {
  constructor() {
    addIcons({ homeOutline, peopleOutline, cashOutline, walletOutline, settingsOutline, logOutOutline });
  }

  logout() {
    console.log('Logout clicked');
    // TODO: Implement logout logic
    // Example: this.authService.logout();
  }
}
