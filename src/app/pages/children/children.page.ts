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
  IonAvatar, 
  IonLabel, 
  IonModal, 
  IonInput, 
  IonSelect, 
  IonSelectOption, 
  IonTextarea 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [
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
    IonAvatar, 
    IonLabel, 
    IonModal, 
    IonInput, 
    IonSelect, 
    IonSelectOption, 
    IonTextarea, 
    CommonModule, 
    FormsModule,
    RouterModule
  ]
})
export class ChildrenPage implements OnInit {
  children = [
    { id: 1, name: 'Ahmed Traore', grade: 'Primaire', status: 'active' },
    { id: 2, name: 'Fatima Diallo', grade: 'Collège', status: 'active' },
    { id: 3, name: 'Ibrahim Kone', grade: 'Lycée', status: 'inactive' }
  ];

  constructor() { }

  ngOnInit() {
  }

  editChild(childId: number) {
    console.log('Edit child:', childId);
    // Implementation for editing child
  }

  toggleStatus(childId: number, currentStatus: string) {
    console.log('Toggle status for child:', childId, 'Current status:', currentStatus);
    // Implementation for toggling status
    const child = this.children.find(c => c.id === childId);
    if (child) {
      child.status = child.status === 'active' ? 'inactive' : 'active';
    }
  }

  markAttendance(childId: number) {
    console.log('Mark attendance for child:', childId);
    // Implementation for marking attendance
  }
}
