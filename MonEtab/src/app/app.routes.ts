import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { SidebarComponent } from './presentation/sidebar/sidebar.component';
import { StudentComponent } from './presentation/student/student.component';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { UserComponent } from './presentation/user/user.component';
import { RapportComponent } from './presentation/rapport/rapport.component';
import { AddStudentComponent } from './presentation/student/add-student/add-student.component';
import { EditStudentComponent } from './presentation/student/edit-student/edit-student.component';
import { AddTeacherComponent } from './presentation/teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './presentation/teacher/edit-teacher/edit-teacher.component';
import { AddUserComponent } from './presentation/user/add-user/add-user.component';
import { EditUserComponent } from './presentation/user/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'user', component: UserComponent },
  { path: 'rapport', component: RapportComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'edit-teacher', component: EditTeacherComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  
];

