import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
deleteUser(arg0: { id: number; name: string; age: number; gender: string; }) {
throw new Error('Method not implemented.');
}
editUser(arg0: { id: number; name: string; age: number; gender: string; }) {
throw new Error('Method not implemented.');
}
addUser() {
throw new Error('Method not implemented.');
}

}
