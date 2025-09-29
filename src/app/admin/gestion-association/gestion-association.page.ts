import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-gestion-association',
  templateUrl: './gestion-association.page.html',
  styleUrls: ['./gestion-association.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GestionAssociationPage implements OnInit {
  searchTerm: string = '';

  associations = [
    { name: 'Maplewood High', location: 'Springfield', date: '2023-08-15', status: 'inactive' },
    { name: 'Oakridge Academy', location: 'Rivertown', date: '2023-09-02', status: 'inactive' },
    { name: 'Pinecrest Prep', location: 'Hillside', date: '2023-09-18', status: 'inactive' },
    { name: 'Willow Creek School', location: 'Meadowvale', date: '2023-10-05', status: 'inactive' },
    { name: 'Cedar Grove Institute', location: 'Forestville', date: '2023-10-20', status: 'active' },
  ];

  get filteredAssociations() {
    if (!this.searchTerm) {
      return this.associations;
    }
    return this.associations.filter(assoc => 
      assoc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      assoc.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  activateAssociation(association: any) {
    association.status = 'active';
    console.log('Association activée:', association.name);
    // Ici, tu peux appeler une API pour sauvegarder
  }

  deactivateAssociation(association: any) {
    association.status = 'inactive';
    console.log('Association désactivée:', association.name);
    // Ici, tu peux appeler une API pour sauvegarder
  }

  constructor() { }

  ngOnInit() {
  }

}
