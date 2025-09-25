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
  IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, 
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
export class PaymentsPage implements OnInit {
  payments = [
    { id: 1, childName: 'Ahmed Traore', amount: 50000, date: '2024-01-15', type: 'Scolarité' },
    { id: 2, childName: 'Fatima Diallo', amount: 30000, date: '2024-01-20', type: 'Cantine' },
    { id: 3, childName: 'Ibrahim Kone', amount: 25000, date: '2024-01-18', type: 'Uniforme' }
  ];

  constructor() { }

  ngOnInit() {
  }

  viewJustification(paymentId: number) {
    console.log('View justification for payment:', paymentId);
    // Implementation for viewing justification
  }
}
