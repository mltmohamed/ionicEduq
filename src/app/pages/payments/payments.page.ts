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
  IonLabel, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonSelect,
  IonSelectOption, IonIcon, IonBadge, IonPopover, IonListHeader } from '@ionic/angular/standalone';
  import {flashOutline, notificationsOutline, mailUnreadOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonPopover, IonBadge, IonIcon, 
    IonCardSubtitle, IonCardTitle, IonCardHeader, 
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, 
    IonButton, IonCard, IonCardContent, IonList, IonItem, IonLabel, 
    IonGrid, IonRow, IonCol, IonSearchbar, IonSelect, IonSelectOption,
    CommonModule, FormsModule, RouterModule
  ]
})
export class PaymentsPage implements OnInit {
  payments = [
    { id: 1, childName: 'Ahmed Traore', amount: 50000, date: '2024-01-15', type: 'Scolarité', status: 'sponsored' },
    { id: 2, childName: 'Fatima Diallo', amount: 30000, date: '2024-01-20', type: 'Cantine', status: 'non-sponsored' },
    { id: 3, childName: 'Ibrahim Kone', amount: 25000, date: '2024-01-18', type: 'Uniforme', status: 'sponsored' }
  ];

  filteredPayments = [...this.payments]; // copie pour filtrage

  constructor() {
    addIcons({flashOutline, notificationsOutline, mailUnreadOutline });
  }

  ngOnInit() {}

  searchChildren(event: any) {
    const query = event.target.value?.toLowerCase() || '';
    this.applyFilters(query, null);
  }

  filterChildren(event: any) {
    const status = event.detail.value;
    this.applyFilters(null, status);
  }

  private applyFilters(query: string | null, status: string | null) {
    this.filteredPayments = this.payments.filter(payment => {
      const matchesQuery = query ? payment.childName.toLowerCase().includes(query) : true;
      const matchesStatus = status && status !== 'all' ? payment.status === status : true;
      return matchesQuery && matchesStatus;
    });
  }
    // Données des notifications
  messages = [
    { id: 1, title: 'Nouveau parrainage', content: 'Un nouvel enfant a été parrainé.', timestamp: new Date('2025-09-23T10:00:00'), read: false },
    { id: 2, title: 'Paiement reçu', content: 'Paiement de 500,000 FCFA reçu.', timestamp: new Date('2025-09-22T15:30:00'), read: false },
    { id: 3, title: 'Rapport envoyé', content: 'Le rapport mensuel a été envoyé aux parrains.', timestamp: new Date('2025-09-21T09:00:00'), read: true }
  ];

  unreadMessages: number = this.messages.filter(msg => !msg.read).length;

  markAsRead(message: any) {
    if (!message.read) {
      message.read = true;
      this.unreadMessages = this.messages.filter(msg => !msg.read).length;
    }
  }
//d'autres données
  viewJustification(paymentId: number) {
    console.log('Voir justificatif pour le paiement ID:', paymentId);
    // Ici tu pourras ouvrir un modal ou afficher un fichier
  }
}
