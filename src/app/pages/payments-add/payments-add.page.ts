import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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
  IonButton,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonItemDivider,
  IonText,
  Platform, IonFooter } from '@ionic/angular/standalone';
import { FileChooser } from '@awesome-cordova-plugins/file-chooser/ngx';
import { File, FileEntry, IFile } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-payments-add',
  templateUrl: './payments-add.page.html',
  styleUrls: ['./payments-add.page.scss'],
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
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonItemDivider,
    IonText,
    CommonModule,
    FormsModule
  ],
  providers: [FileChooser, File, Platform]
})
export class PaymentsAddPage implements OnInit {
  @ViewChild('paymentForm') paymentForm!: NgForm;
  @ViewChild('paymentDateModal') paymentDateModal!: IonModal;
  @ViewChild('expenseDateModal') expenseDateModal!: IonModal;

  payment = {
    child: '',
    need: '',
    amount: null as number | null,
    date: new Date().toISOString(),
    method: '',
    expense: {
      type: '',
      date: new Date().toISOString(),
      justification: null as IFile | File | null
    }
  };

  fileName: string | null = null;
  today: string = new Date().toISOString();

  constructor(
    private platform: Platform,
    private fileChooser: FileChooser,
    private file: File
  ) {}

  ngOnInit() {
    // Initialisation, par exemple, pour charger la liste des enfants depuis un service
  }

  async pickFile() {
    if (this.platform.is('cordova')) {
      try {
        const fileUri = await this.fileChooser.open();
        const fileEntry = await this.file.resolveLocalFilesystemUrl(fileUri) as FileEntry;
        fileEntry.file((file: IFile) => {
          this.payment.expense.justification = file;
          this.fileName = file.name || 'Fichier inconnu';
          console.log('Fichier sélectionné :', this.fileName);
        }, (error: any) => {
          console.error('Erreur lors de la récupération du fichier :', error);
        });
      } catch (error) {
        console.error('Erreur lors de la sélection du fichier :', error);
      }
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*,application/pdf';
      input.onchange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
          this.payment.expense.justification = file;
          this.fileName = file.name;
          console.log('Fichier sélectionné :', this.fileName);
        }
      };
      input.click();
    }
  }

  savePayment() {
    if (this.paymentForm.valid) {
      console.log('Paiement à enregistrer :', this.payment);
      // Logique pour enregistrer le paiement (ex. : appel à une API)
    } else {
      console.log('Formulaire invalide');
      this.markFormAsTouched();
    }
  }

  private markFormAsTouched() {
    Object.keys(this.paymentForm.controls).forEach((key) => {
      this.paymentForm.controls[key].markAsTouched();
    });
  }
}