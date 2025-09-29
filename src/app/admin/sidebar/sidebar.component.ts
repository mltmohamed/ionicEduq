import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, IonicModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  activePath : string='';

  constructor(private router: Router) {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.activePath = event.urlAfterRedirects;
      }
    })
   }
  
  goTo(path: string) {
    this.router.navigate([path]);
  }

  isActive(path: string) {
    return this.activePath === path;
  }

  ngOnInit() {}

}
