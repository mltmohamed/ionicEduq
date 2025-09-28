import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, SidebarComponent]
})
export class DashboardAdminPage implements OnInit {

  schools = [
    {name: 'Maplewood High', date:'2023-08-15'},
    {name: 'Faso High', date:'2023-09-02'},
    {name: 'Association aide', date:'2023-09-19'},
    {name: 'Aide supreme', date:'2023-10-05'},
    {name: 'Aide enfants', date:'2023-07-13'},
  ];

  viewDocument(school: any){
    console.log('View document for:', school.name);
  }

  validate(school: any){
    console.log('Validated', school.name);
  }

  reject(school: any){
    console.log('Rejected:', school.name)
  }

  constructor() { }

  ngOnInit() {
  }

}
