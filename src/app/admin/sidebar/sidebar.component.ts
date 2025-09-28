import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, IonicModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
