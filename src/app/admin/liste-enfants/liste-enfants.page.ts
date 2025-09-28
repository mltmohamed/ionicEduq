import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-liste-enfants',
  templateUrl: './liste-enfants.page.html',
  styleUrls: ['./liste-enfants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListeEnfantsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
