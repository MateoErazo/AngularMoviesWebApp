import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-create-gender',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './create-gender.component.html',
  styleUrl: './create-gender.component.css'
})
export class CreateGenderComponent {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators:[Validators.required]}]
  })

  getErrorNameField = ():string => {
    let name = this.form.controls.name

    if(name.hasError('required')){
      return 'The field name is required.'
    }

    return ''
  }

  saveChanges = () => {
    //this.router.navigate(['/genders'])
    console.log(this.form.value);
  }

}
