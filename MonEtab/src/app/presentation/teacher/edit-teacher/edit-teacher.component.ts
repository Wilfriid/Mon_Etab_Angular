import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [SidebarComponent , ReactiveFormsModule, NgIf],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.scss'
})
export class EditTeacherComponent implements OnInit {
  formTeacher!: FormGroup

  ngOnInit(): void {
    this.formTeacher = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      course: new FormControl('', [Validators.required, Validators.minLength(10)]),
      vacant: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      city: new FormControl('', Validators.required)
    })
  }

  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }

  saveData() {}
}