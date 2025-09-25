import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonCard, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonSelect, 
  IonSelectOption, 
  IonInput, 
  IonCheckbox, 
  IonButton, 
  IonFooter, 
  IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.page.html',
  styleUrls: ['./expenses-add.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonFooter,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonCard, 
    IonCardContent, 
    IonItem, 
    IonLabel, 
    IonSelect, 
    IonSelectOption, 
    IonInput, 
    IonCheckbox, 
    IonButton, 
    CommonModule, 
    FormsModule
  ]
})
export class ExpensesAddPage implements OnInit {

  // ✅ Propriétés utilisées dans le HTML
  expense: any = {
    child: '',
    description: '',
    amount: null,
    notify: false,
    justificatif: null
  };

  fileName: string | null = null;

  constructor() {}

  ngOnInit() {}

  // ✅ Méthode pour enregistrer la dépense
  saveExpense() {
    console.log('Nouvelle dépense enregistrée :', this.expense);
    alert('✅ Dépense enregistrée avec succès !');
    // 👉 Ici tu peux appeler un service pour sauvegarder dans une API / base
  }

  // ✅ Méthode pour choisir un fichier
  pickFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,application/pdf';

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        this.expense.justificatif = file;
        console.log('📂 Fichier choisi :', file);
      }
    };

    input.click();
  }
}
