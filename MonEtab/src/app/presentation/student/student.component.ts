import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [SidebarComponent , AddStudentComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
addStudent() {
throw new Error('Method not implemented.');
}
deleteStudent(arg0: any) {
throw new Error('Method not implemented.');
}
editStudent(_t16: any) {
throw new Error('Method not implemented.');
}

}
