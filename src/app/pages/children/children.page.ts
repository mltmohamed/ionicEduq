import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
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
  IonTextarea, 
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline } from 'ionicons/icons';

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
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule, 
    FormsModule,
    RouterModule
  ]
})
export class ChildrenPage implements OnInit {
  children = [
    { 
      id: 1, 
      firstName: 'Ahmed', 
      lastName: 'Traore', 
      grade: 'Primaire', 
      status: 'active', 
      sponsored: true, 
      photoUrl: 'assets/images/children1.jpg', 
      age: 10, 
      needs: 'Fournitures scolaires', 
      school: 'École Primaire Centrale', 
      schoolEmail: 'ecolecentrale@example.com', 
      guardianName: 'Moussa Traore', 
      guardianPhone: '+223 12345678', 
      guardianEmail: 'moussa.traore@example.com', 
      presenceCount: 45, 
      absenceCount: 5, 
      story: 'Ahmed est un enfant curieux et motivé, originaire d\'un village rural. Il aime les mathématiques et rêve de devenir ingénieur.' 
    },
    { 
      id: 2, 
      firstName: 'Fatima', 
      lastName: 'Diallo', 
      grade: 'Collège', 
      status: 'active', 
      sponsored: false, 
      photoUrl: 'assets/images/children1.jpg', 
      age: 13, 
      needs: 'Uniforme et livres', 
      school: 'Collège Moderne', 
      schoolEmail: 'collegemoderne@example.com', 
      guardianName: 'Aissata Diallo', 
      guardianPhone: '+223 87654321', 
      guardianEmail: 'aissata.diallo@example.com', 
      presenceCount: 50, 
      absenceCount: 2, 
      story: 'Fatima est passionnée par la lecture et excelle en langues. Elle aide souvent sa famille à la maison.' 
    },
    { 
      id: 3, 
      firstName: 'Ibrahim', 
      lastName: 'Kone', 
      grade: 'Lycée', 
      status: 'inactive', 
      sponsored: true, 
      photoUrl: 'assets/images/children1.jpg', 
      age: 16, 
      needs: 'Cantine et transport', 
      school: 'Lycée National', 
      schoolEmail: 'lyceenational@example.com', 
      guardianName: 'Oumar Kone', 
      guardianPhone: '+223 11223344', 
      guardianEmail: 'oumar.kone@example.com', 
      presenceCount: 30, 
      absenceCount: 10, 
      story: 'Ibrahim est un sportif talentueux qui aime le football. Il a eu des difficultés récemment mais reste déterminé.' 
    },
    // Ajoutez plus d'enfants selon vos besoins
  ];

  filteredChildren: any[] = [];
  searchTerm: string = '';
  filterType: string = 'all';

  selectedChild: any = {};

  isChildDetailOpen: boolean = false;

  @ViewChild('attendanceModal') attendanceModal!: IonModal;
  @ViewChild('pedagogicalModal') pedagogicalModal!: IonModal;

  constructor(private cdr: ChangeDetectorRef) { 
    addIcons({ peopleOutline });
  }

  ngOnInit() {
    this.filteredChildren = [...this.children];
  }

  searchChildren(event: any) {
    this.searchTerm = event.detail.value.toLowerCase();
    this.applyFilters();
  }

  filterChildren(event: any) {
    this.filterType = event.detail.value;
    this.applyFilters();
  }

  applyFilters() {
    let temp = this.children.filter(child => 
      (child.firstName.toLowerCase() + ' ' + child.lastName.toLowerCase()).includes(this.searchTerm)
    );

    if (this.filterType === 'sponsored') {
      temp = temp.filter(child => child.sponsored);
    } else if (this.filterType === 'non-sponsored') {
      temp = temp.filter(child => !child.sponsored);
    }

    this.filteredChildren = temp;
    this.cdr.detectChanges(); // Force la détection de changements après filtrage
  }

  openChildDetail(child: any) {
    this.selectedChild = child;
    this.isChildDetailOpen = true;
    this.cdr.detectChanges(); // Force la détection de changements pour mettre à jour le modal
  }

  onChildDetailDismiss() {
    this.isChildDetailOpen = false;
    this.cdr.detectChanges(); // Force la détection après fermeture
  }

  editChild(childId: number) {
    console.log('Edit child:', childId);
    // Implementation for editing child
  }

  toggleStatus(childId: number, currentStatus: string) {
    console.log('Toggle status for child:', childId, 'Current status:', currentStatus);
    const child = this.children.find(c => c.id === childId);
    if (child) {
      child.status = child.status === 'active' ? 'inactive' : 'active';
      this.applyFilters(); // Reapply filters after status change
    }
  }

  markAttendance(childId: number) {
    console.log('Mark attendance for child:', childId);
    // Implementation for marking attendance
  }
}