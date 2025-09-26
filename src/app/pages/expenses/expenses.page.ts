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
  IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle, IonCardTitle, IonCardHeader, 
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, 
    IonButton, IonCard, IonCardContent, IonList, IonItem, IonLabel,
    IonGrid, IonRow, IonCol, IonSearchbar, IonSelect, IonSelectOption,
    CommonModule, FormsModule, RouterModule
  ]
})
export class ExpensesPage implements OnInit {
  expenses = [
    { id: 1, description: 'Frais de scolarité', amount: 50000, childName: 'Ahmed Traore', date: '2024-01-15', status: 'sponsored' },
    { id: 2, description: 'Fournitures scolaires', amount: 15000, childName: 'Fatima Diallo', date: '2024-01-20', status: 'non-sponsored' },
    { id: 3, description: 'Uniforme scolaire', amount: 25000, childName: 'Ibrahim Kone', date: '2024-01-18', status: 'sponsored' }
  ];

  filteredExpenses = [...this.expenses];

  constructor() {}

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
    this.filteredExpenses = this.expenses.filter(expense => {
      const matchesQuery = query ? expense.childName.toLowerCase().includes(query) : true;
      const matchesStatus = status && status !== 'all' ? expense.status === status : true;
      return matchesQuery && matchesStatus;
    });
  }

  notifySponsor(expenseId: number) {
    console.log('Notify sponsor for expense:', expenseId);
    // Implémentation future
  }
}
