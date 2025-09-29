import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.page.html',
  styleUrls: ['./admin-layout.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule, SidebarComponent]
})
export class AdminLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
