import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      identifiant: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    
    })
  }

  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }

  saveData() {}
}

