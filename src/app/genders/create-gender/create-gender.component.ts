import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    name: ['']
  })

  saveChanges = () => {
    //this.router.navigate(['/genders'])
    console.log(this.form.value);
  }

}
