import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
addTeacher() {
throw new Error('Method not implemented.');
}
deleteTeacher(arg0: { id: number; name: string; age: number; gender: string; }) {
throw new Error('Method not implemented.');
}
editTeacher(arg0: { id: number; name: string; age: number; gender: string; }) {
throw new Error('Method not implemented.');
}

}
