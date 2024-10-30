import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from "../../sidebar/sidebar.component";


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, SidebarComponent],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit {
  formStudent!: FormGroup

  ngOnInit(): void {
    this.formStudent = new FormGroup({
      birthday: new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      urlPicture: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
      phoneNumberFather: new FormControl('', Validators.required)
    })
  }

  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }

  saveData() {}
}
