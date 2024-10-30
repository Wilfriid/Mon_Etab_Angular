import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.scss'
})
export class RapportComponent {

}
