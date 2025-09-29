import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-visitor-layout-page',
  templateUrl: './visitor-layout-page.page.html',
  styleUrls: ['./visitor-layout-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class VisitorLayoutPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
