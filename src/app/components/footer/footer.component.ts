import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    class: 'contents'
  }
})
export class FooterComponent {

}
