import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonText, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  associationForm: FormGroup;
  passwordForm: FormGroup;
  currentAssociation = {
    name: 'Association Éducation Pour Tous',
    address: '123 Rue de l\'Éducation, Ville',
    contact: 'contact@association.org',
    phone: '+225 00 00 00 00'
  };

  constructor(private fb: FormBuilder) {
    // Formulaire pour les coordonnées
    this.associationForm = this.fb.group({
      name: [this.currentAssociation.name, Validators.required],
      address: [this.currentAssociation.address, Validators.required],
      contact: [this.currentAssociation.contact, Validators.required],
      phone: [this.currentAssociation.phone, Validators.required]
    });

    // Formulaire pour le mot de passe
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {}

  // Validateur pour confirmation de mot de passe
  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  // Méthode pour sauvegarder les coordonnées (appel API)
  saveAssociation() {
    if (this.associationForm.valid) {
      // TODO: Appel API vers backend Spring Boot (ex. PUT /api/association)
      console.log('Coordonnées mises à jour:', this.associationForm.value);
      // Utilisez un service comme AssociationService pour envoyer les données
      // Exemple : this.associationService.update(this.associationForm.value).subscribe();
      alert('Coordonnées mises à jour avec succès !');
    }
  }

  // Méthode pour changer le mot de passe (appel API)
  changePassword() {
    if (this.passwordForm.valid) {
      // TODO: Appel API vers backend (ex. POST /api/auth/change-password)
      console.log('Mot de passe changé:', this.passwordForm.value);
      alert('Mot de passe changé avec succès !');
      this.passwordForm.reset();
    }
  }
}