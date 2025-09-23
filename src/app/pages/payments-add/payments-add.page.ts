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
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-payments-add',
  templateUrl: './payments-add.page.html',
  styleUrls: ['./payments-add.page.scss'],
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
    IonButton, 
    CommonModule, 
    FormsModule
  ]
})
export class PaymentsAddPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
