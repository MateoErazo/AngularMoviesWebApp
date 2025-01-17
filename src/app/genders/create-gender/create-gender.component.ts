import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { firstCapitalLetter } from '../../shared/functions/validations';
import { GendersFormComponent } from "../genders-form/genders-form.component";
import { GenderCreationDTO } from '../genders';

@Component({
  selector: 'app-create-gender',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GendersFormComponent],
  templateUrl: './create-gender.component.html',
  styleUrl: './create-gender.component.css'
})
export class CreateGenderComponent {
  private router = inject(Router);
 

  saveChanges = (gender: GenderCreationDTO) => {
    console.log(gender)
  }

}
