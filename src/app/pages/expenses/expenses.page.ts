import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonButton, 
    IonCard, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    CommonModule, 
    FormsModule,
    RouterModule
  ]
})
export class ExpensesPage implements OnInit {
  expenses = [
    { id: 1, description: 'Frais de scolarité', amount: 50000, childName: 'Ahmed Traore', date: '2024-01-15' },
    { id: 2, description: 'Fournitures scolaires', amount: 15000, childName: 'Fatima Diallo', date: '2024-01-20' },
    { id: 3, description: 'Uniforme scolaire', amount: 25000, childName: 'Ibrahim Kone', date: '2024-01-18' }
  ];

  constructor() { }

  ngOnInit() {
  }

  notifySponsor(expenseId: number) {
    console.log('Notify sponsor for expense:', expenseId);
    // Implementation for notifying sponsor
  }
}
