import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons 
} from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    CommonModule, 
    FormsModule, 
    IonicModule
  ]
})
export class ReportsPage implements OnInit {

  reports: any[] = [];

  constructor() { }

  ngOnInit() {
    // Exemple de données factices
    this.reports = [
      { id: 1, type: 'Mensuel', childName: 'Enfant 1', date: '2025-09-20', status: 'En attente' },
      { id: 2, type: 'Trimestriel', childName: 'Enfant 2', date: '2025-09-22', status: 'Envoyé' },
      { id: 3, type: 'Annuel', childName: 'Enfant 3', date: '2025-09-25', status: 'Brouillon' }
    ];
  }

  viewReport(id: number) {
    console.log("Voir le rapport avec ID:", id);
    // Ici tu pourras ouvrir un modal ou une page détail
  }

  sendReport(id: number) {
    console.log("Envoyer le rapport avec ID:", id);
    // Ici tu pourras déclencher l'envoi par email ou API
  }

}
