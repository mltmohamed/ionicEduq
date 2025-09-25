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
  IonInput, 
  IonSelect, 
  IonSelectOption, 
  IonTextarea, 
  IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-children-add',
  templateUrl: './children-add.page.html',
  styleUrls: ['./children-add.page.scss'],
  standalone: true,
  imports: [IonFooter, 
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
    IonInput, 
    IonSelect, 
    IonSelectOption, 
    IonTextarea, 
    IonButton, 
    CommonModule, 
    FormsModule
  ]
})
export class ChildrenAddPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
