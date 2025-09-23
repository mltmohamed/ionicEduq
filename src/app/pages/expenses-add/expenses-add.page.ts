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
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.page.html',
  styleUrls: ['./expenses-add.page.scss'],
  standalone: true,
  imports: [
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

  constructor() { }

  ngOnInit() {
  }

}
