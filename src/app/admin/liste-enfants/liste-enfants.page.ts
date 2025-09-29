import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@Component({
  selector: 'app-liste-enfants',
  templateUrl: './liste-enfants.page.html',
  styleUrls: ['./liste-enfants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListeEnfantsPage implements OnInit {

  searchTerm: string = '';

  children = [
    { name: 'Ethan Clark', age: 16, grade: 'Grade 10', school: 'Maplewood High', status: 'sponsored' },
    { name: 'Olivia Reed', age: 17, grade: 'Grade 11', school: 'Oakridge Academy', status: 'not-sponsored' },
    { name: 'Noah Carter', age: 15, grade: 'Grade 9', school: 'Pinecrest Prep', status: 'not-sponsored' },
    { name: 'Ava Bennett', age: 18, grade: 'Grade 12', school: 'Willow Creek School', status: 'sponsored' },
    { name: 'Jackson Cole', age: 15, grade: 'Grade 9', school: 'Oakridge Academy', status: 'sponsored' },
    { name: 'Mia Harper', age: 17, grade: 'Grade 11', school: 'Cedar Grove Institute', status: 'not-sponsored' },
  ];

  get filteredChildren() {
    if (!this.searchTerm) {
      return this.children;
    }
    return this.children.filter(child => 
      child.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      child.school.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
