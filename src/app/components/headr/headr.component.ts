import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.scss'],
  standalone:true,
})
export class HeadrComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
