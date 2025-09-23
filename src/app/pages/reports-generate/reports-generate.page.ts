import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reports-generate',
  templateUrl: './reports-generate.page.html',
  styleUrls: ['./reports-generate.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ReportsGeneratePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
