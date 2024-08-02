import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../views/header/header.component.html',
  styleUrl: '../views/header/header.component.css'
})
export class HeaderComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  
}
