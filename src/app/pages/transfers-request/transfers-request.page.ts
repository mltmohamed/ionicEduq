import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-transfers-request',
  templateUrl: './transfers-request.page.html',
  styleUrls: ['./transfers-request.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransfersRequestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
