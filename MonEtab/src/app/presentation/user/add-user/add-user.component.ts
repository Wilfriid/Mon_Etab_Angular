import { SidebarComponent } from "../../sidebar/sidebar.component";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, SidebarComponent , NgIf]
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  formStudent!: FormGroup;

  ngOnInit(): void {
    this.formStudent = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
      confirmPassword: new FormControl('', Validators.required),
     
    })
  }


  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
  }

   saveData() {}
}



